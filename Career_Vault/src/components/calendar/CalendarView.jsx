import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Plus,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useApplications } from "../../context/ApplicationContext";

import InterviewCard from "./InterviewCard";

const CalendarView = () => {
  const { theme } = useTheme();
  const { applications } = useApplications();

  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const previousMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      )
    );
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Applications with interview dates
  const interviews = useMemo(() => {
    return applications.filter(
      (application) =>
        application.interviewDate
    );
  }, [applications]);

  const getInterviewsForDay = (day) => {
    if (!day) return [];

    return interviews.filter((application) => {
      const date = parseDate(
        application.interviewDate
      );

      if (!date) return false;

      return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
      );
    });
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1
            className="text-3xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            Calendar
          </h1>

          <p
            className="mt-1"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Manage your interviews and important
            application dates.
          </p>
        </div>

        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:scale-105
          "
          style={{
            background: theme.colors.primary,
          }}
        >
          <Plus size={19} />
          Add Event
        </button>

      </div>

      {/* Calendar */}

      <div
        className="rounded-3xl border p-6"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

        {/* Calendar Header */}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div
              className="rounded-xl p-3"
              style={{
                background: theme.colors.primary,
              }}
            >
              <CalendarDays
                size={22}
                color="white"
              />
            </div>

            <div>
              <h2
                className="text-xl font-bold"
                style={{
                  color: theme.colors.text,
                }}
              >
                {monthName} {year}
              </h2>
            </div>

          </div>

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={goToToday}
              className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:opacity-80"
              style={{
                borderColor: theme.colors.border,
                color: theme.colors.text,
              }}
            >
              Today
            </button>

            <button
              type="button"
              onClick={previousMonth}
              className="rounded-xl border p-2 transition hover:opacity-80"
              style={{
                borderColor: theme.colors.border,
                color: theme.colors.text,
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextMonth}
              className="rounded-xl border p-2 transition hover:opacity-80"
              style={{
                borderColor: theme.colors.border,
                color: theme.colors.text,
              }}
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* Weekdays */}

        <div className="grid grid-cols-7 border-b"
          style={{
            borderColor: theme.colors.border,
          }}
        >
          {[
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
          ].map((day) => (
            <div
              key={day}
              className="py-3 text-center text-sm font-semibold"
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}

        <div className="grid grid-cols-7">

          {calendarDays.map((day, index) => {
            const dayInterviews =
              getInterviewsForDay(day);

            return (
              <div
                key={index}
                className="
                  min-h-[110px]
                  border-b
                  border-r
                  p-2
                "
                style={{
                  borderColor: theme.colors.border,
                }}
              >

                {day && (
                  <>
                    {/* Day Number */}

                    <div
                      className={`
                        mb-2
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        text-sm
                        font-semibold
                      `}
                      style={{
                        background: isToday(day)
                          ? theme.colors.primary
                          : "transparent",

                        color: isToday(day)
                          ? "#FFFFFF"
                          : theme.colors.text,
                      }}
                    >
                      {day}
                    </div>

                    {/* Events */}

                    <div className="space-y-1">

                      {dayInterviews.map(
                        (application) => (
                          <div
                            key={application.id}
                            className="truncate rounded-lg px-2 py-1 text-xs font-medium"
                            style={{
                              background: `${theme.colors.primary}20`,
                              color: theme.colors.primary,
                            }}
                            title={`${application.company} - ${application.role}`}
                          >
                            {application.company}
                          </div>
                        )
                      )}

                    </div>
                  </>
                )}

              </div>
            );
          })}

        </div>
      </div>

      {/* Upcoming Interviews */}

      <div
        className="rounded-3xl border p-6"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

        <div className="mb-6">
          <h2
            className="text-2xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            Upcoming Interviews
          </h2>

          <p
            className="mt-1 text-sm"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Your scheduled interviews and meetings.
          </p>
        </div>

        {interviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {interviews.map((application) => (
              <InterviewCard
                key={application.id}
                application={application}
              />
            ))}

          </div>
        ) : (
          <div
            className="rounded-2xl border p-10 text-center"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
              color: theme.colors.secondaryText,
            }}
          >
            No interviews scheduled yet.
          </div>
        )}

      </div>

    </div>
  );
};

const parseDate = (date) => {
  if (!date) return null;

  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] =
      date.split("-").map(Number);

    return new Date(year, month - 1, day);
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
};

export default CalendarView;