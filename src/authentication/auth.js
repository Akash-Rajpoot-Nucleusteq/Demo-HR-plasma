export const doLogin = (data) => {
  let userData = { ...data, role: determineUserRole(data.email) };
  localStorage.setItem("data", JSON.stringify(userData));
};
export const determineUserRole = (email) => {
  if (email === 'recruiter.manager@nucleusteq.com') {
    return 'Recruiter Manager';
  } else if (email === 'recruiter@nucleusteq.com') {
    return 'Recruiter';
  } else if (email === 'manager@nucleusteq.com') {
    return 'Manager';
  } else if (email === 'client@nucleusteq.com') {
    return 'Client Manager';
  } else if (email === 'employee@nucleusteq.com') {
    return 'Employee';
  } else {
    return 'Unknown Role';
  }
};
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data == null) {
    return false;
  } else {
    return true;
  }
};

export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

export const getCurrentUserDetails = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return undefined;
  }
};
