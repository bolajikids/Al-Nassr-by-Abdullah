import React from "react";
export default function Table2() {
  function handlePlayerClick(playerName: string) {
    console.log(playerName);
  }
  return (
    <>
      <h2>Coaches/Managers</h2>
      <table bgcolor="black">
        <thead>
          <tr bgcolor="grey">
            <th>Name/Date of birth</th>
            <th>Nat.</th>
            <th>Appointed</th>
            <th>End of time in post</th>
            <th>Time in post</th>
            <th>Matches</th>
            <th>PPG</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Luís Castro <br /> Sep 3, 1961{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569"
                title="portugal flag"
                alt="portugal flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Jul 6, 2023</td> <td>Present</td> <td>185 days</td> <td>29</td>{" "}
            <td>2.48</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Dinko Jelicic <br /> Sep 19, 1973{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/37.png?lm=1520611569"
                title="crotian flag"
                alt="crotian flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Apr 13, 2023</td> <td>Jun 30, 2023</td> <td>78 days </td>{" "}
            <td>8</td> <td>1.75</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Rudi Garcia <br /> Feb 20, 1964{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/50.png?lm=1520611569"
                title="france flag"
                alt="france flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Jul 1, 2022</td> <td>Apr 12, 2023</td> <td>285 days</td>{" "}
            <td>26</td> <td>2.27</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Miguel Ángel Russo <br /> Apr 9, 1956{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569"
                title="argentina flag"
                alt="argentina flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Dec 11, 2021</td> <td>Jun 30, 2022</td> <td>201 days </td>{" "}
            <td>20</td> <td>2.35</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Marcelo Salazar <br /> Jul 27, 1978{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569"
                title="portugal flag"
                alt="portugal flag"
                className="image"
              />{" "}
              <br />{" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/26.png?lm=1520611569"
                title="Brazil flag"
                alt="Brazil flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Sep 21, 2021</td> <td>Oct 3, 2021</td> <td>12 days</td>{" "}
            <td>2</td> <td>3.00</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Pedro Emanuel <br /> Feb 11, 1975{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569"
                title="portugal flag"
                alt="portugal flag"
                className="image"
              />{" "}
              <br />{" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/6.png?lm=1520611569"
                title="angola flag"
                alt="angola flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Oct 3, 2021</td> <td>Nov 10, 2021</td> <td>38 days</td>{" "}
            <td>5</td> <td>0.80</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Mano Menezes <br /> Jun 11, 1962{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/26.png?lm=1520611569"
                title="Brazil flag"
                alt="Brazil flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Apr 9, 2021</td> <td>Sep 20, 2021</td> <td>164 days</td>{" "}
            <td>12</td> <td>2.08</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Alen Horvat <br /> Sep 13, 1973{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/37.png?lm=1520611569"
                title="crotia flag"
                alt="crotia flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Dec 30, 2020</td> <td>Mar 31, 2021</td> <td>91 days</td>{" "}
            <td>16</td> <td>2.13</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Rui Vitória <br /> Apr 16, 1970{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569"
                title="portugal flag"
                alt="portugal flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Jan 10, 2019</td> <td>Dec 27, 2020</td> <td>717 days</td>{" "}
            <td>86</td> <td>2.03</td>{" "}
          </tr>{" "}
          <tr bgcolor="lightgrey">
            {" "}
            <td onClick={() => handlePlayerClick("Luís Castro")}>
              {" "}
              <strong>
                {" "}
                Hélder Cristóvão <br /> Mar 21, 1971{" "}
              </strong>{" "}
            </td>{" "}
            <td>
              {" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569"
                title="portugal flag"
                alt="portugal flag"
                className="image"
              />{" "}
              <br />{" "}
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/6.png?lm=1520611569"
                title="angola flag"
                alt="angola flag"
                className="image"
              />{" "}
            </td>{" "}
            <td>Nov 10, 2018</td> <td>Jan 11, 2019</td> <td>62 days</td>{" "}
            <td>8</td> <td>1.88</td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>{" "}
    </>
  );
}
