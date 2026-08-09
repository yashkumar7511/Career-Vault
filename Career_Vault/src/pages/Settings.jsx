import { useState } from "react";

import {
  User,
  Palette,
  Database,
  Download,
  Trash2,
  Sun,
  Moon,
} from "lucide-react";

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";

import { useTheme } from "../context/ThemeContext";
import { useApplications } from "../context/ApplicationContext";
import { useWishlist } from "../context/WishlistContext";
import { useSettings } from "../context/SettingsContext";

import DeleteAllDataModal from "../components/settings/DeleteAllDataModal";

const Settings = () => {
  const { theme, darkMode, toggleTheme } = useTheme();

  const {
    applications,
    clearApplications,
  } = useApplications();

  const {
    wishlist,
    clearWishlist,
  } = useWishlist();

  const {
    settings,
    updateSettings,
  } = useSettings();

  const [name, setName] = useState(
    settings.name
  );

  const [jobTitle, setJobTitle] = useState(
    settings.jobTitle
  );

  const [saved, setSaved] = useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  // ================================
  // SAVE PROFILE
  // ================================

  const handleSaveProfile = () => {
    updateSettings({
      name,
      jobTitle,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  // ================================
  // EXPORT DATA AS WORD DOCUMENT
  // ================================

  const handleExport = async () => {
    try {
      const children = [];

      // =================================
      // TITLE
      // =================================

      children.push(
        new Paragraph({
          text: "Career Vault",
          heading: HeadingLevel.TITLE,
        })
      );

      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "Career Management Report",
              bold: true,
              size: 28,
            }),
          ],
        })
      );

      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "Exported on: ",
              bold: true,
            }),
            new TextRun(
              new Date().toLocaleString("en-IN")
            ),
          ],
        })
      );

      children.push(
        new Paragraph({
          text: "",
        })
      );

      // =================================
      // PROFILE
      // =================================

      children.push(
        new Paragraph({
          text: "Profile",
          heading: HeadingLevel.HEADING_1,
        })
      );

      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "Name: ",
              bold: true,
            }),
            new TextRun(name || "Not provided"),
          ],
        })
      );

      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "Job Title: ",
              bold: true,
            }),
            new TextRun(
              jobTitle || "Not provided"
            ),
          ],
        })
      );

      // =================================
      // APPLICATION SUMMARY
      // =================================

      const interviewCount =
        applications.filter(
          (application) =>
            application.status === "Interview"
        ).length;

      const offerCount =
        applications.filter(
          (application) =>
            application.status === "Offer"
        ).length;

      const rejectedCount =
        applications.filter(
          (application) =>
            application.status === "Rejected"
        ).length;

      const appliedCount =
        applications.filter(
          (application) =>
            application.status === "Applied"
        ).length;

      children.push(
        new Paragraph({
          text: "Application Summary",
          heading: HeadingLevel.HEADING_1,
        })
      );

      children.push(
        new Paragraph(
          `Total Applications: ${applications.length}`
        )
      );

      children.push(
        new Paragraph(
          `Applied: ${appliedCount}`
        )
      );

      children.push(
        new Paragraph(
          `Interviews: ${interviewCount}`
        )
      );

      children.push(
        new Paragraph(
          `Offers: ${offerCount}`
        )
      );

      children.push(
        new Paragraph(
          `Rejected: ${rejectedCount}`
        )
      );

      children.push(
        new Paragraph(
          `Wishlist Jobs: ${wishlist.length}`
        )
      );

      // =================================
      // APPLICATIONS
      // =================================

      children.push(
        new Paragraph({
          text: "Applications",
          heading: HeadingLevel.HEADING_1,
        })
      );

      if (applications.length > 0) {
        const applicationRows = [];

        // Header row

        applicationRows.push(
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph("Company"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Role"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Location"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Status"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Work Mode"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Applied Date"),
                ],
              }),
            ],
          })
        );

        // Application rows

        applications.forEach((application) => {
          applicationRows.push(
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph(
                      application.company || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      application.role || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      application.location || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      application.status || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      application.workMode || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      application.appliedDate ||
                        application.date ||
                        ""
                    ),
                  ],
                }),
              ],
            })
          );
        });

        children.push(
          new Table({
            rows: applicationRows,
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
          })
        );

        // Application details

        applications.forEach((application) => {
          children.push(
            new Paragraph({
              text: "",
            })
          );

          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${application.company || ""} — ${
                    application.role || ""
                  }`,
                  bold: true,
                }),
              ],
            })
          );

          if (application.salary) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Salary: ",
                    bold: true,
                  }),
                  new TextRun(
                    application.salary
                  ),
                ],
              })
            );
          }

          if (application.skills) {
            const skills = Array.isArray(
              application.skills
            )
              ? application.skills.join(", ")
              : application.skills;

            if (skills) {
              children.push(
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Skills: ",
                      bold: true,
                    }),
                    new TextRun(skills),
                  ],
                })
              );
            }
          }

          if (application.jobUrl) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Job URL: ",
                    bold: true,
                  }),
                  new TextRun(
                    application.jobUrl
                  ),
                ],
              })
            );
          }

          if (application.notes) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Notes: ",
                    bold: true,
                  }),
                  new TextRun(
                    application.notes
                  ),
                ],
              })
            );
          }
        });
      } else {
        children.push(
          new Paragraph(
            "No applications found."
          )
        );
      }

      // =================================
      // WISHLIST
      // =================================

      children.push(
        new Paragraph({
          text: "Wishlist",
          heading: HeadingLevel.HEADING_1,
        })
      );

      if (wishlist.length > 0) {
        const wishlistRows = [];

        // Header row

        wishlistRows.push(
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph("Company"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Role"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Location"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Priority"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Salary"),
                ],
              }),

              new TableCell({
                children: [
                  new Paragraph("Added Date"),
                ],
              }),
            ],
          })
        );

        // Wishlist rows

        wishlist.forEach((job) => {
          wishlistRows.push(
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph(
                      job.company || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      job.role || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      job.location || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      job.priority || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      job.salary || ""
                    ),
                  ],
                }),

                new TableCell({
                  children: [
                    new Paragraph(
                      job.addedDate || ""
                    ),
                  ],
                }),
              ],
            })
          );
        });

        children.push(
          new Table({
            rows: wishlistRows,
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
          })
        );

        // Wishlist details

        wishlist.forEach((job) => {
          children.push(
            new Paragraph({
              text: "",
            })
          );

          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${job.company || ""} — ${
                    job.role || ""
                  }`,
                  bold: true,
                }),
              ],
            })
          );

          if (job.workMode) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Work Mode: ",
                    bold: true,
                  }),
                  new TextRun(
                    job.workMode
                  ),
                ],
              })
            );
          }

          if (job.salary) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Salary: ",
                    bold: true,
                  }),
                  new TextRun(
                    job.salary
                  ),
                ],
              })
            );
          }

          if (job.priority) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Priority: ",
                    bold: true,
                  }),
                  new TextRun(
                    job.priority
                  ),
                ],
              })
            );
          }

          if (job.skills) {
            const skills = Array.isArray(
              job.skills
            )
              ? job.skills.join(", ")
              : job.skills;

            if (skills) {
              children.push(
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Skills: ",
                      bold: true,
                    }),
                    new TextRun(skills),
                  ],
                })
              );
            }
          }

          if (job.jobUrl) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Job URL: ",
                    bold: true,
                  }),
                  new TextRun(
                    job.jobUrl
                  ),
                ],
              })
            );
          }

          if (job.notes) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Notes: ",
                    bold: true,
                  }),
                  new TextRun(
                    job.notes
                  ),
                ],
              })
            );
          }
        });
      } else {
        children.push(
          new Paragraph(
            "No wishlist jobs found."
          )
        );
      }

      // =================================
      // CREATE WORD DOCUMENT
      // =================================

      const doc = new Document({
        sections: [
          {
            properties: {},
            children,
          },
        ],
      });

      // =================================
      // CREATE DOCX BLOB
      // =================================

      const blob =
        await Packer.toBlob(doc);

      // =================================
      // DOWNLOAD
      // =================================

      const url =
        URL.createObjectURL(blob);

      const link =
        window.document.createElement("a");

      link.href = url;

      link.download =
        "Career-Vault-Report.docx";

      window.document.body.appendChild(
        link
      );

      link.click();

      window.document.body.removeChild(
        link
      );

      URL.revokeObjectURL(url);

    } catch (error) {
      console.error(
        "Error exporting Career Vault data:",
        error
      );

      alert(
        "Unable to export data. Please try again."
      );
    }
  };

  // ================================
  // DELETE ALL DATA
  // ================================

  const handleDeleteAllData = () => {
    clearApplications();

    clearWishlist();

    setShowDeleteModal(false);
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1
          className="text-3xl font-bold"
          style={{
            color: theme.colors.text,
          }}
        >
          Settings
        </h1>

        <p
          className="mt-1"
          style={{
            color:
              theme.colors.secondaryText,
          }}
        >
          Manage your Career Vault preferences.
        </p>
      </div>

      {/* Profile */}

      <section
        className="rounded-3xl border p-6"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

        <div className="mb-6 flex items-center gap-3">

          <div
            className="rounded-xl p-3"
            style={{
              background:
                theme.colors.primary,
            }}
          >
            <User
              size={21}
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
              Profile
            </h2>

            <p
              className="text-sm"
              style={{
                color:
                  theme.colors.secondaryText,
              }}
            >
              Update your basic profile
              information.
            </p>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {/* Name */}

          <div>

            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: theme.colors.text,
              }}
            >
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full rounded-xl border px-4 py-3 outline-none"
              style={{
                background:
                  theme.colors.background,
                borderColor:
                  theme.colors.border,
                color:
                  theme.colors.text,
              }}
            />

          </div>

          {/* Job Title */}

          <div>

            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: theme.colors.text,
              }}
            >
              Job Title
            </label>

            <input
              type="text"
              value={jobTitle}
              onChange={(e) =>
                setJobTitle(e.target.value)
              }
              className="w-full rounded-xl border px-4 py-3 outline-none"
              style={{
                background:
                  theme.colors.background,
                borderColor:
                  theme.colors.border,
                color:
                  theme.colors.text,
              }}
            />

          </div>

        </div>

        <div className="mt-5 flex items-center gap-4">

          <button
            type="button"
            onClick={handleSaveProfile}
            className="rounded-xl px-5 py-3 font-semibold text-white transition hover:scale-105"
            style={{
              background:
                theme.colors.primary,
            }}
          >
            Save Changes
          </button>

          {saved && (
            <span
              className="text-sm font-medium"
              style={{
                color: "#10B981",
              }}
            >
              Changes saved ✓
            </span>
          )}

        </div>

      </section>

      {/* Appearance */}

      <section
        className="rounded-3xl border p-6"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

        <div className="mb-6 flex items-center gap-3">

          <div
            className="rounded-xl p-3"
            style={{
              background:
                theme.colors.primary,
            }}
          >
            <Palette
              size={21}
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
              Appearance
            </h2>

            <p
              className="text-sm"
              style={{
                color:
                  theme.colors.secondaryText,
              }}
            >
              Customize how Career Vault
              looks.
            </p>

          </div>

        </div>

        <div
          className="flex flex-col gap-5 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{
            background:
              theme.colors.background,
            borderColor:
              theme.colors.border,
          }}
        >

          <div className="flex items-center gap-4">

            {darkMode ? (
              <Moon
                size={22}
                color={
                  theme.colors.primary
                }
              />
            ) : (
              <Sun
                size={22}
                color={
                  theme.colors.primary
                }
              />
            )}

            <div>

              <p
                className="font-semibold"
                style={{
                  color:
                    theme.colors.text,
                }}
              >
                {darkMode
                  ? "Dark Mode"
                  : "Light Mode"}
              </p>

              <p
                className="text-sm"
                style={{
                  color:
                    theme.colors.secondaryText,
                }}
              >
                Switch between light and
                dark appearance.
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-xl px-5 py-3 font-semibold text-white transition hover:scale-105"
            style={{
              background:
                theme.colors.primary,
            }}
          >
            Switch to{" "}
            {darkMode ? "Light" : "Dark"}
          </button>

        </div>

      </section>

      {/* Data Management */}

      <section
        className="rounded-3xl border p-6"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

        <div className="mb-6 flex items-center gap-3">

          <div
            className="rounded-xl p-3"
            style={{
              background:
                theme.colors.primary,
            }}
          >
            <Database
              size={21}
              color="white"
            />
          </div>

          <div>

            <h2
              className="text-xl font-bold"
              style={{
                color:
                  theme.colors.text,
              }}
            >
              Data Management
            </h2>

            <p
              className="text-sm"
              style={{
                color:
                  theme.colors.secondaryText,
              }}
            >
              Manage your applications and
              wishlist data.
            </p>

          </div>

        </div>

        <div className="flex flex-col gap-4 sm:flex-row">

          {/* Export Data */}

          <button
            type="button"
            onClick={handleExport}
            className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:-translate-y-0.5"
            style={{
              background:
                theme.colors.background,
              borderColor:
                theme.colors.border,
              color:
                theme.colors.text,
            }}
          >
            <Download size={18} />

            Export Data
          </button>

          {/* Data Count */}

          <div
            className="rounded-xl border px-5 py-3 text-sm"
            style={{
              background:
                theme.colors.background,
              borderColor:
                theme.colors.border,
              color:
                theme.colors.secondaryText,
            }}
          >
            {applications.length} Applications ·{" "}
            {wishlist.length} Wishlist Jobs
          </div>

        </div>

      </section>

      {/* Danger Zone */}

      <section
        className="rounded-3xl border p-6"
        style={{
          background: theme.colors.card,
          borderColor: "#EF444460",
        }}
      >

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-red-500/10 p-3">

            <Trash2
              size={21}
              color="#EF4444"
            />

          </div>

          <div>

            <h2
              className="text-xl font-bold"
              style={{
                color:
                  theme.colors.text,
              }}
            >
              Danger Zone
            </h2>

            <p
              className="text-sm"
              style={{
                color:
                  theme.colors.secondaryText,
              }}
            >
              Permanently remove your Career
              Vault data.
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={() =>
            setShowDeleteModal(true)
          }
          className="mt-6 flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          <Trash2 size={18} />

          Delete All Data
        </button>

      </section>

      {/* Delete Confirmation Modal */}

      <DeleteAllDataModal
        isOpen={showDeleteModal}
        onClose={() =>
          setShowDeleteModal(false)
        }
        onConfirm={handleDeleteAllData}
      />

    </div>
  );
};

export default Settings;