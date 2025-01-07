import React from "react";
import "./Ways.css";

function Ways() {
  return (
    <div className="ways">
      <div className="ways_container">
        <h1 className="ways_title">
          У тебя есть 3 способа учиться <span>мобильной съемке</span>
        </h1>
        <p className="ways_step">
          Первый: Придумывать эффекты самому, тратя
          <br />
          неадекватное количество времени и нервов
        </p>
        <span className="ways_or">или</span>
        <p className="ways_step">
          Красть чужие идеи
          <br />и схватить хейт от аудитории
        </p>
        <span className="ways_or">или</span>
        <div className="ways_step_priority">Учиться у опытных специалистов,<br/>Развивать насмотренность.<br/>И придумывать свои сценарии.<br/>(наиболее результативный вариант)</div>
      </div>
      <div className="ways_dot ways_dot_left"></div>
      <div className="ways_dot ways_dot_right"></div>
    </div>
  );
}

export default Ways;
