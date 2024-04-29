import React from 'react'

export default function Mainchat() {
  return (

    <>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css"
    integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK"
    crossOrigin="anonymous"
  />
  {/* Custom CSS */}
  <link rel="stylesheet" href="style.css" />
  <title>WhatsApp Web</title>
  <div className="back-container">
    <div className="container-fluid front-container">
      <div className="back-top" />
      <div className="back-main" />
    </div>
    <div className="container front-container1">
      <div className="row chat-top">
        <div className="col-sm-4 border-right border-secondary">
          <img
            src="images/p3.jpg"
            alt=""
            className="profile-image rounded-circle"
          />
          <span className="float-right mt-2">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
            </svg>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chat-left-fill mx-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
            </svg>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-three-dots-vertical mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              />
            </svg>
          </span>
        </div>
        <div className="col-sm-8">
          <img
            src="images/p2.jpg"
            alt=""
            className="profile-image rounded-circle"
          />
          <span className="ml-2">Rahul Kumar</span>
          <span className="float-right mt-2">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-three-dots-vertical mx-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 contacts">
          <div className="contact-table-scroll">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="images/p2.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Rahul Kumar <br /> <small>achi chal rahi</small>
                  </td>
                  <td>
                    <small>11:55 PM</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Jack <br /> <small>Bye tata</small>
                  </td>
                  <td>
                    <small>10:09 PM</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p4.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Bullywood Mafia <br /> <small>Drg Drg Drg</small>
                  </td>
                  <td>
                    <small>Monday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Sumit Jha
                    <br /> <small>Corona ho gaya kya</small>
                  </td>
                  <td>
                    <small>9/22/20</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p6.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    News Channel <br /> <small>Bekar news only</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                {/* start */}
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Ali <br /> <small>Hello</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p5.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Afreen <br /> <small>Nahi main nahi janti</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Geeky Shows <br /> <small>PPT nahi mila</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Sofia <br /> <small>God Bless You</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Kunal <br /> <small>Nikl lo</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Kunal <br /> <small>Nikl lo</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Kunal <br /> <small>Nikl lo</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Kunal <br /> <small>Nikl lo</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Kunal <br /> <small>Nikl lo</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="images/p1.jpg"
                      alt=""
                      className="profile-image rounded-circle"
                    />
                  </td>
                  <td>
                    Kunal <br /> <small>Nikl lo</small>
                  </td>
                  <td>
                    <small>Sunday</small>
                  </td>
                </tr>
                {/* end */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-8 message-area">
          <div className="message-table-scroll">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <p className="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">
                      Hello Rahul
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:20 PM</small>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-success p-2 mt-2 mr-5 shadow-sm text-white float-right rounded">
                      Hello Sonam How are You
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:21 PM</small>
                    </p>
                  </td>
                </tr>
                {/* start */}
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">
                      Main achi hu tum kaise ho
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:21 PM</small>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">
                      Suna hai tumhari Job chali gayi ya chhod di tumne
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:22 PM</small>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-success rounded p-2 mt-2 mr-5 shadow-sm text-white float-right">
                      Haan Lockdown ki wajah se company me kuch problem ho rahi
                      thi so kuch logo ko resign dene ko kaha gaya tha.. meri
                      condition thodi thik hai to maine socha main hi kar deta
                      hu.. mere pas paisa bahot hai...
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:24 PM</small>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">
                      acha
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:24 PM</small>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-success rounded p-2 mt-2 mr-5 shadow-sm text-white float-right">
                      Haan
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:25 PM</small>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-success rounded p-2 mt-2 mr-5 shadow-sm text-white float-right">
                      aur tumhari job kaisi chali rahi
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-3 shadow-sm">
                      <small>11:26 PM</small>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">
                      achi chal rahi
                    </p>
                  </td>
                  <td>
                    <p className="p-1 mt-2 mr-5 shadow-sm">
                      <small>11:26 PM</small>
                    </p>
                  </td>
                </tr>
                {/* end */}
              </tbody>
            </table>
          </div>
          <div className="row message-box p-3">
            <div className="col-sm-2 mt-2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-emoji-smile"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
                />
                <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-paperclip mx-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-cash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"
                />
                <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
            </div>
            <div className="col-sm-8">
              <form action="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write message..."
                />
              </form>
            </div>
            <div className="col-sm-2 mt-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-chevron-double-up"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Option 1: Bootstrap Bundle with Popper.js */}
</>

  )
}