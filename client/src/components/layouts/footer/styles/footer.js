.Container {
    padding: 80px 60px;
    background: white;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
},

Wrapper {
    display: flex;
    flex-direction: column;
    justify-content:center;
    max-innerWidth: 100px;
    margin: 0 auto;
},

Column {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
},
Row {
    display: grid;
    grid-template-columns: repeat (auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

   @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
},

Link {
color: #000000;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: black;
        background: white;
        transition: 200ms ease-in;
    }
},
Title {
    font-size; 24px;
    color: black;
    margin-bottom: 20 px;
    font-weight: bold;
}
