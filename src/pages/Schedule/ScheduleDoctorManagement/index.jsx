import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import AddSchedule from '../AddSchedule'
import './index.scss'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import InputField from 'components/InputFiled'
import { useSelector } from 'react-redux'
import scheduleApi from 'api/scheduleApi'
import { toast } from 'react-toastify'
import convertTZ7Str from 'utils/convertTZ7Str'
import Pagination from 'components/Pagination'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
function ScheduleDoctorManagement() {
    const navigate = useNavigate()

    const refSubmitButton = useRef(null)
    const userDoctor = useSelector(state => state.user.profile)
    const [showAddSchedule, setShowAddSchedule] = useState(false)
    const toggleShowAddSchedule = () =>
        setShowAddSchedule(!showAddSchedule)
    const [scheduleSearchResult, setScheduleSearchResult] = useState(
        []
    )
    const [pagination, setPagination] = useState({
        size: 10,
        totalPages: 3,
        totalElements: 11,
        page: 0
    })
    const schema = yup.object().shape({
        startDate: yup.date('Từ ngày').required('Chọn giờ bắt đầu'),
        endDate: yup.date('Đến ngày').required('Chọn giờ bắt đầu')
    })
    const form = useForm({
        defaultValues: {
            startDate: '',
            endDate: ''
        },
        resolver: yupResolver(schema)
    })
    const handlePageChange = page => {
        const filters = { ...queryParams, page: page }
        navigate(`?${queryString.stringify(filters)}`)
    }
    const location = useLocation()
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search)
        return {
            page: Number.parseInt(params.page) || 0,
            size: Number.parseInt(params.size) || 10
        }
    }, [location.search])

    const handleSubmitForm = value => {
        const valueSubmit = { ...value }
        valueSubmit.startDate = valueSubmit.startDate.toISOString()
        valueSubmit.endDate = valueSubmit.endDate.toISOString()
        ;(async () => {
            try {
                const respone = await scheduleApi.getSchedule(
                    userDoctor.doctor.id,
                    {
                        params: { ...queryParams, ...valueSubmit }
                    }
                )
                setScheduleSearchResult(respone.schedules)
                setPagination(respone.page)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        })()
    }
    useEffect(() => {
        if (refSubmitButton.current) refSubmitButton.current.click()
    }, [queryParams])
    return (
        <div className="scheduleDoctorManagement">
            <div className="scheduleDoctorManagement__container">
                <header>Quản lí lịch khám</header>

                <div className="scheduleDoctorManagement__list-schedule">
                    <form
                        className="form scheduleDoctorManagement__form"
                        onSubmit={form.handleSubmit(handleSubmitForm)}
                    >
                        <div className="form__element-two-input">
                            <div>
                                <InputField
                                    label="Từ"
                                    name="startDate"
                                    type="datetime-local"
                                    form={form}
                                />
                            </div>
                            <div>
                                <InputField
                                    label="Đến"
                                    name="endDate"
                                    type="datetime-local"
                                    form={form}
                                />
                            </div>
                            <div className="scheduleDoctorManagement__action">
                                <button
                                    type="submit"
                                    className="btnSuccess"
                                    ref={refSubmitButton}
                                >
                                    Tìm kiếm lịch khám
                                </button>
                                <button
                                    className="btnSuccess"
                                    onClick={toggleShowAddSchedule}
                                >
                                    Thêm lịch khám mới
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bắt đầu</th>
                            <th>Kết thúc</th>
                            <th>Giá</th>
                            <th>Tình trạng</th>
                        </tr>
                    </thead>
                    {scheduleSearchResult.length > 0 ? (
                        <tbody>
                            {scheduleSearchResult.map(schedule => (
                                <tr key={schedule.id}>
                                    <td>{schedule.id}</td>
                                    <td>
                                        {convertTZ7Str(
                                            schedule.begin
                                        )}
                                    </td>
                                    <td>
                                        {convertTZ7Str(schedule.end)}
                                    </td>
                                    <td>{schedule.cost}</td>
                                    <td>
                                        {schedule.status
                                            ? 'Đã đặt'
                                            : 'Trống'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <></>
                    )}
                </table>
                {scheduleSearchResult.length > 0 && (
                    <div className="patientManagement__pagination">
                        <Pagination
                            totalPage={pagination.totalPages}
                            currentPage={pagination.page}
                            onClick={handlePageChange}
                        />
                    </div>
                )}
            </div>
            {showAddSchedule && (
                <AddSchedule onClose={toggleShowAddSchedule} />
            )}
        </div>
    )
}

export default ScheduleDoctorManagement
