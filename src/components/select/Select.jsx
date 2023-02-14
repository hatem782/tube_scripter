import React, { useState, useRef } from "react";
import useOutsideEvent from "../../hooks/useOutsideEvent";

import arrow from "../../assets/svg/navbar/select_.svg";

import styles from "./select.module.scss";

const Select = ({ onChange, name, label, with_img = false, items = [] }) => {
  const [select, setSelect] = useState(items[0]);
  const [open, setOpen] = useState(false);

  const select_ref = useRef(null);
  useOutsideEvent(select_ref, () => {
    setOpen(false);
  });

  const handle_open = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    setSelect(item);
    setOpen(false);
    onChange({ target: { value: item.value, name } });
  };

  return (
    <div ref={select_ref} className={styles.select}>
      <label>{label}</label>

      <div className={styles.header} onClick={handle_open}>
        {with_img && <img src={select.img} className={styles.flag} />}
        <span>{select.title}</span>
        <img src={arrow} className={styles.arrow} />
      </div>

      {open && (
        <div className={styles.hidden}>
          {items.map((item, key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  handleSelect(item);
                }}
                className={styles.item}
              >
                {with_img && <img src={item.img} alt={item.title} />}
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
