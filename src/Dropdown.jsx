// import { checked, unchecked } from './assets';
import { useEffect, useState } from 'react';
import check from './assets/check.png';
import uncheck from './assets/uncheck.png';
// const img = require('./assets/check.png');
const arr = [
  { name: 'option1', isChecked: false },
  { name: 'option2', isChecked: false },
  { name: 'option3', isChecked: false },
  { name: 'option4', isChecked: false },
];

function Dropdown1() {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState(arr);
  const [allchecked, setAllchecked] = useState(false);
  const handleopen = () => setOpen(!open);
  const handleCheck = (id) => {
    let arr = data.map((map) => {
      if (map.name === id) {
        map.isChecked = !map.isChecked;
        return map;
      } else {
        return map;
      }
    });
    setData(arr);
  };
  useEffect(() => {
    data.map((res) => {
      if (res.isChecked === false) {
        setAllchecked(false);
      } else {
        setAllchecked(true);
      }
    });
  }, [data]);
  const handleCheckAll = () => {
    let arr = data.map((res) => {
      res.isChecked = !res.isChecked;
      return res;
    });
    console.log(arr);
    setData(arr);
  };
  return (
    <div>
      <div
        div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p onClick={handleopen}>All Pages</p>
        <img
          src={allchecked ? check : uncheck}
          alt='checked'
          style={{ width: 24, height: 24 }}
          onClick={() => handleCheckAll()}
        />
      </div>
      {open && (
        <div
          style={{
            borderWidth: 1,
            borderColor: 'rgba(205, 205, 205, 1)',
            borderStyle: 'solid',
          }}
        />
      )}
      {open && (
        <div>
          {data.map((res) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
              >
                <p>{res?.name?.toUpperCase()}</p>
                <img
                  src={res.isChecked ? check : uncheck}
                  alt='checked'
                  style={{ width: 24, height: 24 }}
                  onClick={() => handleCheck(res.name)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown1;
