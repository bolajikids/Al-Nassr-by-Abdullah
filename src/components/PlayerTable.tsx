import React from "react";
export default function Table1() {
  function handlePlayerClick(playerName: string) {
    console.log(playerName);
  }
  return (
    <>
      <h2>Players</h2>
      <table bgcolor="black">
        <thead>
          <tr bgcolor="grey">
            <th>#</th>
            <th>Player</th>
            <th>Date of birth/Age</th>
            <th>Nat.</th>
            <th>Joined</th>
            <th>Signed from</th>
            <th>Contract</th>
            <th>Foot</th>
            <th>Market value</th>
            <th>Postion</th>
            <th>Age</th>
            <th>Ht</th>
            <th>Wt(Kg)</th>
          </tr>
        </thead>
        {/* ------------------------------------------- */}
        <tbody>
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">7</div>
            </td>
            <td onClick={() => handlePlayerClick("Cristiano Ronaldo")}>
              <strong>Cristiano Ronaldo</strong>
              <td>Centre-Forward</td>
            </td>
            <td>Feb 5, 1985 (38)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569"
                title="portugal flag"
                alt="portugal flag"
                className="image"
              />
            </td>
            <td>Jan 1, 2023</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/515.png?lm=1456997255"
                alt="Without Club"
                title="Without Club"
              />
            </td>
            <td>Jun 30, 2025</td>
            <td>right</td>
            <td>€15.00m</td>
            <td>Forward</td>
            <td>38</td>
            <td>6'0"</td>
            <td>80</td>
          </tr>
          {/* --------------------------------------------------- */}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">22</div>
            </td>
            <td onClick={() => handlePlayerClick("David Ospina")}>
              <strong>David Ospina</strong>
              <td>Goalkeeper</td>
            </td>
            <td>Aug 31, 1988 (35)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/83.png?lm=1520611569"
                title="columbia flag"
                alt="columbia flag"
                className="image"
              />
              <br />
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/50.png?lm=1520611569"
                title="france flag"
                alt="france flag"
                className="image"
              />
            </td>
            <td>Jul 11, 2022</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/6195.png?lm=1688982522"
                alt="SSC Napoli"
                title="SSC Napoli"
              />
            </td>
            <td>Jun 30, 2024</td>
            <td>right</td>
            <td>€2.50m</td>
            <td>Goalkeeper</td>
            <td>35</td>
            <td>6'0"</td>
            <td>83</td>
          </tr>
          {/* ------------------------------------------------ */}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">77</div>
            </td>
            <td onClick={() => handlePlayerClick("Marcelo Brozovic")}>
              <strong>Marcelo Brozovic</strong>
              <td>Defensive Midfield</td>
            </td>
            <td>Nov 16, 1992 (31)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/37.png?lm=1520611569"
                title="crotia flag"
                alt="crotia flag"
                className="image"
              />
            </td>
            <td>Jul 3, 2023</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/46.png?lm=1618900989"
                alt="inter milan"
                title="inter milan"
              />
            </td>
            <td>Jun 30, 2026</td>
            <td>both</td>
            <td>€18.00m</td>
            <td>Midfielder</td>
            <td>31</td>
            <td>5'11"</td>
            <td>68</td>
          </tr>
          {/* ------------------------------------------------ */}{" "}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">33</div>
            </td>
            <td onClick={() => handlePlayerClick("Waleed Ali")}>
              <strong>Waleed Ali</strong>
              <td>Goalkeeper</td>
            </td>
            <td>Apr 19, 1986 (37)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/146.png?lm=1520611569"
                title="Saudi Arabia flag"
                alt="Saudi Arabia flag"
                className="image"
              />
            </td>
            <td>Feb 7, 2017</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/9840_1641571840.png?lm=1641571840"
                alt="Al-Shabab FC"
                title="Al-Shabab FC"
              />
            </td>
            <td>unknown</td>
            <td>right</td>
            <td>€25k</td>
            <td>Goalkeeper</td>
            <td>37</td>
            <td>6'4"</td>
            <td>91</td>
          </tr>
          {/* ------------------------------------------------ */}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">27</div>
            </td>
            <td onClick={() => handlePlayerClick("Aymeric Laporte")}>
              <strong>Aymeric Laporte</strong>
              <td>Centre-Back</td>
            </td>
            <td>May 27, 1994 (29)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/157.png?lm=1520611569"
                title="Spain flag"
                alt="Spain flag"
                className="image"
              />
              <br />
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/50.png?lm=1520611569"
                title="france flag"
                alt="france flag"
                className="image"
              />
            </td>
            <td>Aug 24, 2023</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/281.png?lm=1467356331"
                alt="Manchester City"
                title="Manchester City"
              />
            </td>
            <td>Jun 30, 2026</td>
            <td>left</td>
            <td>€25.00m</td>
            <td>Defender</td>
            <td>29</td>
            <td>6'2"</td>
            <td>87</td>
          </tr>
          {/* ------------------------------------------------ */}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">4</div>
            </td>
            <td onClick={() => handlePlayerClick("Mohammed Al Fatil")}>
              <strong>Mohammed Al Fatil</strong>
              <td>Centre-Back</td>
            </td>
            <td>Jan 4, 1992 (32)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/146.png?lm=1520611569"
                title="Saudi Arabia flag"
                alt="Saudi Arabia flag"
                className="image"
              />
            </td>
            <td>Aug 3, 2021</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/18487.png?lm=1694169063"
                alt="Al-Ahli SFC"
                title="Al-Ahli SFC"
              />
            </td>
            <td>Jun 30, 2025 </td>
            <td>right</td>
            <td>€125k</td>
            <td>Defender</td>
            <td>32</td>
            <td>5'10"</td>
            <td>72</td>
          </tr>
          {/* ------------------------------------------------ */}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">6</div>
            </td>
            <td onClick={() => handlePlayerClick("Seko Fofana")}>
              <strong>Seko Fofana</strong>
              <td>Central Midfield</td>
            </td>
            <td>May 7, 1995 (28)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/38.png?lm=1520611569"
                title="cote d'ivoire flag"
                alt="cote d'ivoire flag"
                className="image"
              />
              <br />
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/50.png?lm=1520611569"
                title="france flag"
                alt="france flag"
                className="image"
              />
            </td>
            <td>Jul 18, 2023</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/826.png?lm=1595457059"
                alt="RC Lens"
                title="RC Lens"
              />
            </td>
            <td>Jun 30, 2026</td>
            <td>right</td>
            <td>€20.00m</td>
            <td>Midfielder</td>
            <td>28</td>
            <td>6'0"</td>
            <td>74</td>
          </tr>
          {/* ------------------------------------------------ */}{" "}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">10</div>
            </td>
            <td onClick={() => handlePlayerClick("Sadio Mane")}>
              <strong>Sadio Mane</strong>
              <td>Left Winger</td>
            </td>
            <td>Apr 10, 1992 (31)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/149.png?lm=1520611569"
                title="senegal flag"
                alt="senegal flag"
                className="image"
              />
            </td>
            <td>Aug 1, 2023</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/27.png?lm=1498251238"
                alt="Bayern Munich"
                title="Bayern Munich"
              />
            </td>
            <td>Jun 30, 2026</td>
            <td>right</td>
            <td>€20.00m</td>
            <td>Forward</td>
            <td>31</td>
            <td>5'8"</td>
            <td>69</td>
          </tr>
          {/* ------------------------------------------------ */}{" "}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">25</div>
            </td>
            <td onClick={() => handlePlayerClick("Otavio")}>
              <strong>Otavio</strong> <td>Attacking Midfield</td>{" "}
            </td>
            <td>Feb 9, 1995 (28)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569"
                title="portugal flag"
                alt="portugal flag"
                className="image"
              />
              <br />
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/26.png?lm=1520611569"
                title="Brazil flag"
                alt="Brazil flag"
                className="image"
              />
            </td>
            <td>Aug 22, 2023</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/720.png?lm=1486310161"
                alt="FC Porto"
                title="FC Porto"
              />
            </td>
            <td>Jun 30, 2026</td>
            <td>right</td>
            <td>€30.00m</td>
            <td>Midfielder</td>
            <td>29</td>
            <td>5'7"</td>
            <td>74</td>
          </tr>
          {/* ------------------------------------------------ */}
          <tr bgcolor="lightgrey">
            <td className="zentriert bg_Torwart">
              <div className="rn_nummer">15</div>
            </td>
            <td onClick={() => handlePlayerClick("Alex Telles")}>
              <strong>Alex Telles</strong>
              <td>Left-Back</td>
            </td>
            <td>Dec 15, 1992 (31)</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/26.png?lm=1520611569"
                title="Brazil flag"
                alt="Brazil flag"
                className="image"
              />
              <br />
              <img
                src="https://tmssl.akamaized.net/images/flagge/verysmall/75.png?lm=1520611569"
                title="italy flag"
                alt="italy flag"
                className="image"
              />
            </td>
            <td>Jul 23, 2023</td>
            <td>
              <img
                src="https://tmssl.akamaized.net/images/wappen/verysmall/985.png?lm=1457975903"
                alt="Manchester United            "
                title="Manchester United"
              />
            </td>
            <td>Jun 30, 2025</td>
            <td>left</td>
            <td>€7.00m</td>
            <td>Defender</td>
            <td>31</td>
            <td>5'11"</td>
            <td>66</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
