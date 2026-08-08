import { useTheme } from "../../context/ThemeContext";

const ApplicationForm = () => {
  const { theme } = useTheme();

  const inputStyle = {
    background: theme.colors.background,
    borderColor: theme.colors.border,
    color: theme.colors.text,
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

      {/* Company */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Company
        </label>

        <input
          type="text"
          placeholder="Google"
          className="w-full rounded-xl border p-3 outline-none transition"
          style={inputStyle}
        />
      </div>

      {/* Role */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Role
        </label>

        <input
          type="text"
          placeholder="Frontend Developer"
          className="w-full rounded-xl border p-3 outline-none transition"
          style={inputStyle}
        />
      </div>

      {/* Location */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Location
        </label>

        <input
          type="text"
          placeholder="Bengaluru"
          className="w-full rounded-xl border p-3 outline-none transition"
          style={inputStyle}
        />
      </div>

      {/* Status */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Status
        </label>

        <select
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
          defaultValue="Applied"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Work Mode */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Work Mode
        </label>

        <select
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
          defaultValue="Remote"
        >
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Onsite</option>
        </select>
      </div>

      {/* Applied Date */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Applied Date
        </label>

        <input
          type="date"
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

      {/* Salary */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Salary
        </label>

        <input
          type="text"
          placeholder="18 LPA"
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

      {/* Skills */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Skills
        </label>

        <input
          type="text"
          placeholder="React, JavaScript, Tailwind"
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
        />

        <p
          className="mt-2 text-xs"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          Separate skills with commas.
        </p>
      </div>

      {/* Job URL */}

      <div className="md:col-span-2">
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Job URL
        </label>

        <input
          type="url"
          placeholder="https://company.com/jobs"
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

      {/* Notes */}

      <div className="md:col-span-2">
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Notes
        </label>

        <textarea
          rows={5}
          placeholder="Write your notes..."
          className="w-full resize-none rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

    </div>
  );
};

export default ApplicationForm;