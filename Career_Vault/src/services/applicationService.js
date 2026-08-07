import {
  recentApplications,
  upcomingInterviews,
} from "../data/dashboardData";

export const getRecentApplications = () => {
  return recentApplications;
};

export const getUpcomingInterviews = () => {
  return upcomingInterviews;
};

export const getApplicationById = (id) => {
  return recentApplications.find(
    (application) => application.id === id
  );
};

export const addApplication = (application) => {
  console.log("Add:", application);
};

export const updateApplication = (id, updatedApplication) => {
  console.log(id, updatedApplication);
};

export const deleteApplication = (id) => {
  console.log(id);
};