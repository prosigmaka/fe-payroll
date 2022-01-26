import { Routes, Route, Navigate } from "react-router-dom";
// Page Components
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
// Admin Section Components
import DashboardAdmin from "./components/sections/admin/DashboardAdmin";
import AdminSummary from "./components/sections/admin/AdminSummary";
import ApprovalPanel from "./components/sections/admin/ApprovalPanel";
import PayrollPanel from "./components/sections/admin/PayrollPanel";
// User Section Components
import DashboardUser from "./components/sections/user/DashboardUser";
import UserSummary from "./components/sections/user/UserSummary";
import LeaveReqForm from "./components/sections/user/LeaveReqForm";
import SalarySlipList from "./components/sections/user/SalarySlipList";
import SalarySlip from "./components/sections/user/SalarySlip";
import SickReqForm from "./components/sections/user/SickReqForm";
import PermissionReqForm from "./components/sections/user/PermissionReqForm";
import ReviewApproval from "./components/sections/admin/ReviewApproval";
import SalarySlipReview from "./components/sections/admin/SalarySlipReview";
import SalaryPaymentForm from "./components/sections/admin/SalaryPaymentForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="admin" element={<Navigate replace to="summary" />} />
          <Route path="admin" element={<DashboardAdmin />}>
            <Route path="summary" element={<AdminSummary />} />
            <Route path="approval-panel" element={<ApprovalPanel />} />
            <Route path="payroll-panel" element={<PayrollPanel />} />
            <Route path="review-approval" element={<ReviewApproval />} />
            <Route path="review-salary" element={<SalarySlipReview />} />
            <Route path="payment-form" element={<SalaryPaymentForm />} />
          </Route>
          <Route path="user" element={<Navigate replace to="summary" />} />
          <Route path="user" element={<DashboardUser />}>
            <Route path="summary" element={<UserSummary />} />
            <Route path="leave-request" element={<LeaveReqForm />} />
            <Route path="sick-request" element={<SickReqForm />} />
            <Route path="permission-request" element={<PermissionReqForm />} />
            <Route path="payroll-history" element={<SalarySlipList />} />
            <Route path="salary-slip" element={<SalarySlip />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
