import React from "react";
import { useSelector } from "react-redux";

import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./ResidentsList.module.scss";

export const ResidentsList = () => {
    const { residents } = useSelector((state) => state.residents);
    const { fullAddressTitle } = useSelector((state) => state.appartments);
    console.log(fullAddressTitle, residents);
    return (
        <>
            <h3>{fullAddressTitle}</h3>
            <div className={styles.list}>
                {residents.clients?.map((resident, i) => (
                    <div key={resident + i} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <PersonIcon />
                        </div>

                        <div>
                            {resident.name && <h4>{resident.name}</h4>}
                            <div className={styles.itemPhone}>
                                <CallIcon
                                    style={{
                                        width: "14px",
                                        height: "14px",
                                        marginRight: "5px",
                                    }}
                                />
                                {resident.phone}
                            </div>
                            {resident.email && (
                                <div>
                                    <EmailIcon
                                        style={{
                                            width: "14px",
                                            height: "14px",
                                            marginRight: "5px",
                                        }}
                                    />
                                    {resident.email}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};