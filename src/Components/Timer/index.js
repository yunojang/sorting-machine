import { useEffect, useState } from "react";

import formatDate from "./utils/format";

function Timer({format}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const currentSettingTimer = setInterval(()=>{setCurrentDate(new Date())},1000);
    return () => {clearInterval(currentSettingTimer)};
  }, []);

  return (
    <div>
     {formatDate(currentDate,format)}
    </div>
  )
}

export default Timer;