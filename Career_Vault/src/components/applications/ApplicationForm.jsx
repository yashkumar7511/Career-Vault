import { useTheme } from "../../context/ThemeContext";

const ApplicationForm = ({
  formData,
  handleChange,
}) => {
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
          required
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Google"
          className="w-full rounded-xl border p-3 outline-none"
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
          required
          name="role"
          type="text"
          value={formData.role}
          onChange={handleChange}
          placeholder="Frontend Developer"
          className="w-full rounded-xl border p-3 outline-none"
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
          required
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          placeholder="Bengaluru"
          className="w-full rounded-xl border p-3 outline-none"
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
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
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
          name="workMode"
          value={formData.workMode}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
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
          required
          name="appliedDate"
          type="date"
          value={formData.appliedDate}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

      {/* Interview Date */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Interview Date
        </label>

        <input
          name="interviewDate"
          type="date"
          value={formData.interviewDate || ""}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

      {/* Interview Time */}

      <div>
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Interview Time
        </label>

        <input
          name="interviewTime"
          type="time"
          value={formData.interviewTime || ""}
          onChange={handleChange}
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
          Salary (Optional)
        </label>

        <input
          name="salary"
          type="text"
          value={formData.salary}
          onChange={handleChange}
          placeholder="18 LPA"
          className="w-full rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

      {/* Skills */}

      <div className="md:col-span-2">
        <label
          className="mb-2 block font-medium"
          style={{
            color: theme.colors.text,
          }}
        >
          Skills
        </label>

        <input
          name="skills"
          type="text"
          value={formData.skills}
          onChange={handleChange}
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
          Separate multiple skills with commas.
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
          name="jobUrl"
          type="url"
          value={formData.jobUrl}
          onChange={handleChange}
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
          name="notes"
          rows={5}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Write your notes..."
          className="w-full resize-none rounded-xl border p-3 outline-none"
          style={inputStyle}
        />
      </div>

    </div>
  );
};

export default ApplicationForm;