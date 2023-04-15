import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/layout/Layout";

const Page404 = () => {
  const [time, setTime] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (time <= 0) {
      router.push("/");
    } else {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time, router]);

  return (
    <Layout title="Page not found" className="404-page">
      <div className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__title">404</h1>
          <h2 className="page-not-found__label">Page not found</h2>
          <p className="page-not-found__text">
            You will be redirected to the homepage in {time}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
