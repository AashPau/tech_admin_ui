import { useEffect, useRef, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyUserLinkAction } from "../../features/userAction";

export const UserVerification = () => {
  const [resp, setResp] = useState({});
  const [searchParams] = useSearchParams();
  const c = searchParams.get("c");
  const e = searchParams.get("e");

  const shouldCall = useRef(true);

  useEffect(() => {
    if (shouldCall.current) {
      (async () => {
        const data = await verifyUserLinkAction({ c, e });
        setResp(data);
      })();
      shouldCall.current = false;
    }
  }, [c, e]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="bg-light p-2 rounded text-center"
        style={{ width: "450px" }}
      >
        {resp?.message ? (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
          </Alert>
        ) : (
          <>
            <Spinner variant="primary" className="fs-1" />
            <p> Please wait while we are verifying you.</p>
          </>
        )}
      </div>
    </div>
  );
};
