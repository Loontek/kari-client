import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import UserAccount from "./pages/UserAccount/UserAccount.jsx";
import {useContext, useEffect} from "react";
import {Context} from "./main.jsx";
import {observer} from "mobx-react-lite";
import {check} from "./api/userAPI.js";
import Account from "./pages/Account/Account.jsx";
import StatusForm from "./pages/StatusForm/StatusForm.jsx";
import StatusTable from "./pages/StatusTable/StatusTable.jsx";
import PostForm from "./pages/PostForm/PostForm.jsx";
import PostTable from "./pages/PostTable/PostTable.jsx";
import PriorityForm from "./pages/PriorityForm/PriorityForm.jsx";
import PriorityTable from "./pages/PriorityTable/PriorityTable.jsx";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm.jsx";
import EmployeesTable from "./pages/EmployeesTable/EmployeesTable.jsx";
import ClientsTable from "./pages/ClientsTable/ClientsTable.jsx";
import AppealsTable from "./pages/AppealsTable/AppealsTable.jsx";
import EditForm from "./pages/EditForm/EditForm.jsx";
import MyAppealsTable from "./pages/MyAppealsTable/MyAppealsTable.jsx";

const App = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    check()
      .then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      })
      .catch(e => {
        navigate('/')
      })
  }, [])

  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path={'login'} element={<Auth />} />
        <Route path={'reg'} element={<Registration />} />
        <Route path={'user-account'} element={<UserAccount />} >
          <Route index element={<Account />}/>
          <Route path={'status-form'} element={<StatusForm />} />
          <Route path={'status-table'} element={<StatusTable />} />
          <Route path={'post-form'} element={<PostForm />} />
          <Route path={'post-table'} element={<PostTable />} />
          <Route path={'priority-form'} element={<PriorityForm />} />
          <Route path={'priority-table'} element={<PriorityTable />} />
          <Route path={'employee-form'} element={<EmployeeForm />} />
          <Route path={'employees'} element={<EmployeesTable />} />
          <Route path={'clients'} element={<ClientsTable />} />
          <Route path={'appeals'} element={<AppealsTable />} />
          <Route path={'my-appeals'} element={<MyAppealsTable />} />
          <Route path={'appeal-edit-form'} element={<EditForm />} />
        </Route>
      </Route>
    </Routes>
  )
})

export default App
