    import React, { useEffect, useState } from "react";
    import { useSelector } from "react-redux";
    import style from "./Temperaments.module.css";
    import { AiFillDelete } from "react-icons/ai";
    import { IoIosAddCircle } from "react-icons/io";
    export default function Temperaments({ setForm, setError }) {
    const temperaments = useSelector((state) => state.temperaments);
    const [actualTemps, setActualTemps] = useState([]);

    useEffect(() => {
        setForm((prevForm) => ({
        ...prevForm,
        temperaments: actualTemps,
        }));
    }, [actualTemps, setForm]);

    useEffect(() => {
        if (actualTemps.length === 0) {
        setError((prevErrors) => ({
            ...prevErrors,
            temperaments: "You need to choose at least 1",
        }));
        } else {
        setError((prevErrors) => ({
            ...prevErrors,
            temperaments: undefined,
        }));
        }
    }, [actualTemps, setError]);

    return (
        <ul className={style.TemperamentList}>
        {temperaments.map((temperament) => {
            return (
            <li key={temperament.id} className={style.TemperamentItem}>
                {temperament.name}
                {!actualTemps.includes(temperament.id) ? (
                <button
                    className={style.TemperamentButton}
                    type="button"
                    onClick={() => setActualTemps([...actualTemps, temperament.id])}
                >
                    <IoIosAddCircle className={style.TemperamentIcon} />
                </button>
                ) : null}

                {actualTemps.includes(temperament.id) ? (
                <button
                    className={style.TemperamentButton}
                    type="button"
                    onClick={() =>
                    setActualTemps(
                        actualTemps.filter((tempt) => tempt !== temperament.id)
                    )
                    }
                >
                    <AiFillDelete className={style.TemperamentIcon} />
                </button>
                ) : null}
            </li>
            );
        })}
        </ul>
    );
    }
