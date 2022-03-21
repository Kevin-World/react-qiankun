import React from "react";
import { loadMicroApp } from 'qiankun';

const ManualLoadMicroApp = () => {

  const containerRef: any = React.createRef();
  let microApp: any;

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    microApp = loadMicroApp({
      name: 'vue-qiankun',
      entry: 'http://localhost:8100',
      container: containerRef.current,
      props: { brand: 'qiankun' },
    });
    return () => {
      microApp?.unmount();
    };
  }, []);

  return (
    <>
      <h2>通过 “loadMicroApp” 手动加载的Vue微应用</h2>
      <div ref={containerRef}></div>
    </>
  )
}

export default ManualLoadMicroApp;