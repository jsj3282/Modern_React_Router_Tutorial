import React from "react";
import Profile from "./Profile";
import {NavLink, Route, Routes} from 'react-router-dom'
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink to="/profiles/jsj">
                        jsj
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/homer">
                        homer
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='/' element='유저를 선택해주세요'/>
                <Route path=':username' element={<Profile/>}/>
            </Routes>
            {/*<RouterHookSample/>*/}
            <WithRouterSample/>
        </div>
    )
}

export default Profiles;