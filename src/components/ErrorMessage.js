import React, { useState } from "react";

function ErrorMessage({
  error,
  success,
  errorStyle,
  messageStyle,
  errorClass,
  messageClass,
  autoRemoveAfter,
}) {
  //  TODO: props : ['styles', 'className', 'Array?{bool}', 'AutoRemove?{bool}',]

  // console.log(
  //   error,
  //   success,
  //   errorStyle,
  //   messageStyle,
  //   errorClass,
  //   messageClass
  // );
  let errormessage = error;
  let message = success;

  //* if autoremove is true it will b removed from screen afetr a delay
  const [show, setshow] = useState(true);

  // if (autoRemoveAfter) {
  //   setTimeout(() => {
  //     setshow(false)
  //   }, autoRemoveAfter);
  // }

  //* if array is true then we will map over the errors, abd nessages otherwise it will be just strings
  let isArray = true;

  if (typeof errormessage === "string") {
    isArray = false;
  }
  // * if there is no classname or styles the default styles will apply

  //errorMessage style :
  const errStyle = errorStyle
    ? errorStyle
    : {
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        color: "#DE210B",
        marginTop: "20px",
        fontSize: "16px",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "15px",
        display: "block",
      };
  //message style :
  const msgStyle = messageStyle
    ? messageStyle
    : {
        backgroundColor: "rgba(145, 191, 65)",
        color: "black",
        marginTop: "20px",
        fontSize: "16px",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "15px",
        display: "block",
      };

  // classnames for success or error :
  const errClass = errorClass ? errorClass : "";
  const msgClass = messageClass ? messageClass : "";
  return (
    <>
      {isArray ? (
        errormessage.length > 0 && show ? (
          <ul style={errClass ? {} : errStyle} className={errClass}>
            {errormessage.map((error, i) => (
              <p style={{ display: "block" }} key={i}>
                {error}
              </p>
            ))}
          </ul>
        ) : (
          <>
            {message && show && (
              <ul style={msgClass ? {} : msgStyle} className={msgClass}>
                <p>{message}</p>
              </ul>
            )}
          </>
        )
      ) : (
        <>
          {errormessage.length > 0 && show ? (
            <ul style={errClass ? {} : errStyle} className={errClass}>
              <p style={{ display: "block" }}>{errormessage}</p>
            </ul>
          ) : (
            <>
              {message && show && (
                <ul style={msgClass ? {} : msgStyle} className={msgClass}>
                  <p>{message}</p>
                </ul>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default React.memo(ErrorMessage);
