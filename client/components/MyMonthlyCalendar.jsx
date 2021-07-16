import React, { useState } from 'react'
import { format, subHours, startOfMonth } from 'date-fns'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css'

import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem
} from '@zach.codes/react-calendar'

export default function MyMonthlyCalendar () {
  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(new Date())
  )

  const eventItems = [
    { title: 'Call John', date: subHours(new Date(), 2) },
    { title: 'Call John', date: subHours(new Date(), 1) },
    { title: 'Meeting with Bob', date: new Date() }
  ]
  // const [eventItems, setEventItems] = useState([
  //   {
  //     title: '',
  //     date: subHours(new Date())
  //   }
  // ])

  // onlick that takes in the date thats clicked, create event handler
  // New state, newEventItem, setNewEventItem

  // function handleChange (e) {
  //   const { name, value } = e.target
  //   setContactForm({
  //     ...contactForm,
  //     [name]: value
  //   })
  // }

  // function handleClick (e) {
  //   e.preventDefault()
  //   sendContactFormMessage(contactForm)
  //   setContactForm({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   })
  //   // }

  return (
    <>
      <div>
        <MonthlyCalendar
          currentMonth={currentMonth}
          onCurrentMonthChange={date => setCurrentMonth(date)}
        >
          <MonthlyNav />
          <MonthlyBody
            events={eventItems}
          >
            <MonthlyDay
              renderDay={data =>
                data.map((item, index) => {
                  return <DefaultMonthlyEventItem
                    key={index}
                    title={item.title}
                    // Format the date here to be in the format you prefer
                    date={format(item.date, 'k:mm')}
                  />
                })
              }
            />
          </MonthlyBody>
        </MonthlyCalendar>
      </div>
    </>
  )
}
