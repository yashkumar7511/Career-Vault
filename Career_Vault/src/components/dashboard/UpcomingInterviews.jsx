import {
  CalendarDays,
  Clock3,
  Video,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const interviews = [
  {
    company: "Google",
    role: "Frontend Developer",
    date: "Tomorrow",
    time: "10:00 AM",
  },
  {
    company: "Microsoft",
    role: "React Developer",
    date: "15 Aug",
    time: "2:30 PM",
  },
  {
    company: "Amazon",
    role: "SDE I",
    date: "18 Aug",
    time: "11:00 AM",
  },
];

const UpcomingInterviews = () => {

  const { theme } = useTheme();

  return (

    <div
      className="rounded-3xl border p-7"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >

      <div className="mb-8 flex items-center justify-between">

        <h2
          className="text-2xl font-bold"
          style={{
            color: theme.colors.text,
          }}
        >
          Upcoming Interviews
        </h2>

        <button
          style={{
            color: theme.colors.primary,
          }}
        >
          View All
        </button>

      </div>

      <div className="space-y-5">

        {interviews.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border p-5"
            style={{
              borderColor: theme.colors.border,
            }}
          >

            <div className="flex items-center justify-between">

              <div>

                <h3
                  className="font-semibold"
                  style={{
                    color: theme.colors.text,
                  }}
                >
                  {item.company}
                </h3>

                <p
                  style={{
                    color: theme.colors.secondaryText,
                  }}
                >
                  {item.role}
                </p>

              </div>

              <Video
                size={22}
                color={theme.colors.primary}
              />

            </div>

            <div
              className="mt-4 flex items-center gap-6 text-sm"
              style={{
                color: theme.colors.secondaryText,
              }}
            >

              <div className="flex items-center gap-2">

                <CalendarDays size={16} />

                {item.date}

              </div>

              <div className="flex items-center gap-2">

                <Clock3 size={16} />

                {item.time}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default UpcomingInterviews;