var swiper = new Swiper(".body-inner-1", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteracrtion: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
  },
});

var swiper2 = new Swiper(".body-inner-2", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 5,
    },
  },
});

var swiper3 = new Swiper(".body-inner-6", {
  slidesPerView: 1,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiper4 = new Swiper(".body-inner-8", {
  slidesPerView: 1,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const body6_inner_tempplate = `<div class="swiper-slide body6-inner"></div>`;

const empty_game = `<div class="game">
<a>
    <img class="game-img" style="visibility: hidden;"></img>
    <h6 class="type"></h6>
    <div class="title"></div>
    <div class="price"><div class="free-price"></div></div>    
</a>
</div>  
`;

const truePriceGame = `<div class="game">
<a>
    <img src="./test8.jpg" class="game-img"></img>
    <h6 class="type"></h6>
    <div class="title"></div>
    <div class="price"><div class="true-price"><p>$</p><p class="price-number"></p></div></div>
</a>
</div> `;
const truePriceGame_toplist = `<div class="game">
<a>
    <img class="game-img"></img>
    <div class="game-text">
        <div class="title"></div>
        <div class="price"><div class="true-price"><p>$</p><p class="price-number"></p></div></div>    
    </div>
</a>
</div>`;

const freeGame = `<div class="game">
<a>
    <img src="./test8.jpg" class="game-img"></img>
    <h6 class="type"></h6>
    <div class="title"></div>
    <div class="price"><div class="free-price">Free</div></div>    
</a>
</div>  
`;
const freeGame_noType = `<div class="game">
<a>
    <img src="./test8.jpg" class="game-img"></img>
    <div class="title"></div>
    <div class="price"><div class="free-price">Free</div></div>    
</a>
</div>  
`;
const freeGame_toplist = `<div class="game">
<a>
    <img class="game-img"></img>
    <div class="game-text">
        <div class="title"></div>
        <div class="price"><div class="free-price">Free</div></div>    
    </div>
</a>
</div>`

const salePriceGame = `<div class="game">
<a>
    <img src="./test8.jpg" class="game-img"></img>
    <h6 class="type"></h6>
    <div class="title"></div>
    <div class="price">
        <div class="sale-price">
            <div class="sale-box"></div>
            <div class="old-price">
                <p>$</p><p class="price-number"></p>
            </div>
        </div>
        <div class="true-price"><p>$</p><p class="price-number"></p></div>
    </div>
</a>
</div> `;
const salePriceGame_toplist = `<div class="game">
<a>
    <img class="game-img"></img>
    <div class="game-text">
        <div class="title"></div>
        <div class="price">
            <div class="sale-price">
                <div class="sale-box"></div>
                <div class="old-price">
                    <p>$</p><p class="price-number"></p>
                </div>
            </div>
            <div class="true-price"><p>$</p><p class="price-number"></p></div>
        </div>    
    </div>
</a>
</div>`

const noGame = `<div class="no-game">There's no game here!</div>`;


const gameView = `<div class="game-view">
<div class="game-head">RGP: Kingdom Of Death</div>
<div class="game-body">
    <div class="main-body">
        <img src="./test8.jpg" alt="" class="game-img">
        <div class="game-genre">
            <div class="head">Genres</div>
            <div class="genre">
                <div>RPG</div>
                <div>Action</div>
                <div>MMO</div>
            </div>
        </div>
        <div class="game-descript">
            <p>About the game</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam animi aspernatur placeat voluptate a, modi cum dolores excepturi rerum velit voluptatum suscipit numquam exercitationem laudantium harum quasi ut. Ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, repellat amet consectetur accusamus delectus commodi adipisci alias, asperiores quibusdam quia odio possimus sit nobis saepe illo similique modi iusto reiciendis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis id itaque vero quae possimus assumenda quam maiores repellat, tenetur veniam consequatur rem, excepturi, cupiditate delectus laborum tempore voluptatem sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, iure natus. Magni ipsam voluptatum pariatur nihil magnam cum laudantium a perspiciatis architecto voluptatibus culpa optio quis dignissimos libero, quisquam nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad beatae ipsa quasi porro? Dolorum, dicta non quisquam repellat porro fugit quod necessitatibus est corrupti delectus voluptatibus! Sint, qui nemo.</p>
        </div>
        <div class="game-rating">
            <div class="head">Game Rating</div>
            <div class="star-cont">
                <div class="stars-outer">
                    <div class="stars-inner"></div>
                </div>
                <span class="number-rating">3.5</span>
            </div>
        </div>
        <div class="specification">
            <p>Specification</p>
            <div class="plat-table">
                <div class="platform-req">
                    <div class="plat">WINDOWS</div>
                    <div class="minimum no">
                        <div class="head">Minimum</div>
                        <div class="os">
                            <p>OS</p>
                            <p>Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bit (Windows 10 dev builds are not currently supported)</p>
                        </div>
                        <div class="cpu">
                            <p>Processor</p>
                            <p>Intel Core i5 or equivalent</p>
                        </div>
                        <div class="ram">
                            <p>Memory</p>
                            <p>8 GB</p>
                        </div>
                        <div class="min-storage">
                            <p>Storage</p>
                            <p>30 GB</p>
                        </div>
                        <div class="gpu">
                            <p>Graphics</p>
                            <p>NVIDIA® GeForce® GT 1030 or better</p>
                        </div>
                    </div>
                    <div class="recommended no">
                        <div class="head">Recommended</div>
                        <div class="os">
                            <p>OS</p>
                            <p>Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bit (Windows 10 dev builds are not currently supported)</p>
                        </div>
                        <div class="cpu">
                            <p>Processor</p>
                            <p>Intel Core i7 or equivalent</p>
                        </div>
                        <div class="ram">
                            <p>Memory</p>
                            <p>16 GB</p>
                        </div>
                        <div class="min-storage">
                            <p>Storage</p>
                            <p>30 GB</p>
                        </div>
                        <div class="gpu">
                            <p>Graphics</p>
                            <p>NVIDIA® GeForce® GTX 1060 6GB or better</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="core-info">
        <img src="./test8-logo.jpg" alt="" class="game-logo">
        <div class="game-type">BASE GAME</div>
        <div class="game-price">
            <div class="sale-price">
                <div class="sale-box">-60%</div>
                <div class="old-price">
                    <p>đ</p><p class="price-number">1,250,000</p>
                </div>
            </div>
            <div class="true-price"><p>đ</p><p class="price-number">200,000</p></div>
            <!-- <div class="free-price">Free</div> -->
        </div>
        <div class="sale-range">Sale ends on 30/12/22</div>
        <button class="add-cart">ADD TO CART</button>
        <div class="core">
            <div class="dev">
                <p>Developer</p>
                <p>COGNOSPHERE PTE. LTD.</p>
            </div>
            <div class="release-date">
                <p>Release Date</p>
                <p>06/09/21</p>
            </div>
            <div class="platform">
                <p>Platform</p>
                <p>Windows</p>
            </div>
        </div>
    </div>
</div>
</div>`;

let cart_list;

const getDetailsProduct = async (name) => {
  let tmptmp = [];
  for(let k = 0; ; k++){
    let gamelist = await fetch(
      `https://db-game-be.vercel.app/api/game/all?page=${k}`
    );
    gamelist = await gamelist.json();
    if(Object.keys(gamelist).length === 0){
      break;
    }
    for(let i in gamelist){
      if(gamelist[i].gameName === name){
        let gamedetails = await fetch(
          `https://db-game-be.vercel.app/api/game?id=${gamelist[i].gameId}`
        );
        gamedetails = await gamedetails.json();
        return gamedetails;
      }
    }
    tmptmp.push(gamelist);
  }
  for(let l in tmptmp){
    for(let i in tmptmp[l]){
      let dlc = await fetch(`https://db-game-be.vercel.app/api/dlc?gameId=${tmptmp[l][i].gameId}`);
      dlc = await dlc.json();
      for(let j in dlc){
        if(dlc[j].dlcName === name){
          let dlcdetails = await fetch(
            `https://db-game-be.vercel.app/api/dlc/${dlc[j].dlcId}`
          );
          dlcdetails = await dlcdetails.json();
          return dlcdetails;
        }
      }
    }
  }
  // console.log(gamelist);
  // let ans = [];
  // console.log(tmp);
}

// const getGenreDLC = async (name) => {
//   let gamelist = await fetch(
//     `https://db-game-be.vercel.app/api/game/all`
//   );
//   gamelist = await gamelist.json();
//   // console.log(gamelist);
//   // let tmp = [];
//   for(let i in gamelist){
//     let dlc = await fetch(`https://db-game-be.vercel.app/api/dlc?gameId=${gamelist[i].gameId}`);
//     dlc = await dlc.json();
//     for(let j in dlc){
//       if(dlc[j].dlcName === name) return gamelist[i];
//     }
//   }
// }


// const getGenreGame = async () => {
//   let gamelist = await fetch(
//     `https://db-game-be.vercel.app/api/game/all`
//   );
//   gamelist = await gamelist.json();
//   let tmp = gamelist;
//   // for(let i in gamelist){
//   //   let dlc = await fetch(`https://db-game-be.vercel.app/api/dlc?gameId=${gamelist[i].gameId}`);
//   //   dlc = await dlc.json();
//   //   for(let j in dlc){
//   //     tmp.push(dlc[j]);
//   //   }
//   // }
//   // console.log(tmp);
//   return tmp;
// };


const getGameGenre = async (genre) => {
  let gamelist = await fetch(
    `https://db-game-be.vercel.app/api/game?genre=${genre}`
  );
  gamelist = await gamelist.json();
  let tmp = gamelist;
  for(let i in gamelist){
    let dlc = await fetch(`https://db-game-be.vercel.app/api/dlc?gameId=${gamelist[i].gameId}`);
    dlc = await dlc.json();
    for(let j in dlc){
      tmp.push(dlc[j]);
    }
  }
  // console.log(tmp);
  return tmp;
};

const getAllGame = async () => {
  let tmptmp = [];
  let tmp = [];
  for(let k = 0; ; k++){
    let gamelist = await fetch(
      `https://db-game-be.vercel.app/api/game/all?page=${k}`
    );
    gamelist = await gamelist.json();
    if(Object.keys(gamelist).length === 0){
      break;
    }
    for(let i in gamelist){
      tmp.push(gamelist[i]);
    }
    tmptmp.push(gamelist);
  }
  for(let l in tmptmp){
    for(let i in tmptmp[l]){
      let dlc = await fetch(`https://db-game-be.vercel.app/api/dlc?gameId=${tmptmp[l][i].gameId}`);
    dlc = await dlc.json();
      for(let j in dlc){
        tmp.push(dlc[j]);
      }
    }
  }
  // console.log(tmp);
  return tmp;
};

const getSaleGame = async () => {
  let salegamelist = await fetch(
    `https://db-game-be.vercel.app/api/game?onSalePromo=true`
  );
  salegamelist = await salegamelist.json();
  let tmp = salegamelist;
  let dlclist = await getAllDLC();
  for(let i in dlclist){
    if(dlclist[i].priceWithDiscount !== dlclist[i].price) tmp.push(dlclist[i]);
  }
  // console.log(tmp);
  return tmp;
}

// Initial Ratings

// Total Stars
const starsTotal = 5;
// Get ratings
function getRatings() {
  let rate = document.querySelector(".number-rating").innerHTML;
  // Get percentage
  let starPercentage = (rate / starsTotal) * 100;

  // Round to nearest 10
  let starPercentageRounded = `${Math.round(starPercentage / 5) * 5}%`;

  // Set width of stars-inner to percentage
  document.querySelector(".stars-inner").style.width = starPercentageRounded;

  // Add number rating
  document.querySelector(".number-rating").innerHTML = rate;
}

let cartList = [];

// Show Game view
const setLinkGameView = () => {
  document.querySelectorAll(".game").forEach((a) => {
    a.addEventListener("click", async () => {
      // Get data
      let name = await a.querySelector(".title").innerHTML;
      await getDetailsProduct(name).then(data => {
        console.log(data);
        let gameview_place = document.querySelector(".game-view");
        if(data[0].hasOwnProperty("dlcId")){
          gameview_place.innerHTML = `<div class="game-head"></div>
          <div class="game-body">
              <div class="main-body">
                  <img src="./test8.jpg" alt="" class="game-img">
                  <div class="game-genre">
                      <div class="head">Genres</div>
                      <div class="genre">
                          <div>RPG</div>
                          <div>Action</div>
                          <div>MMO</div>
                      </div>
                  </div>
                  <div class="game-descript">
                      <p>About the game</p>
                      <p></p>
                  </div>
                  <div class="game-rating">
                      <div class="head">Game Rating</div>
                      <div class="star-cont">
                          <div class="stars-outer">
                              <div class="stars-inner"></div>
                          </div>
                          <span class="number-rating">3.5</span>
                      </div>
                  </div>
                  <div class="specification">
                      <p>Specification</p>
                      <div class="plat-table no-spec">
                        No Specification
                      </div>
                  </div>
              </div>
              <div class="core-info">
                  <img src="./test8-logo.jpg" alt="" class="game-logo">
                  <div class="game-type"></div>
                  <div class="game-price">
                  </div>
                  <div class="sale-range"></div>
                  <button class="add-cart">ADD TO CART</button>
                  <div class="core">
                      <div class="dev">
                          <p>Developer</p>
                          <p></p>
                      </div>
                      <div class="release-date">
                          <p>Release Date</p>
                          <p></p>
                      </div>
                      <div class="platform">
                          <p>Platform</p>
                          <p>Windows</p>
                      </div>
                  </div>
              </div>
          </div>`;

          gameview_place.querySelector(".game-head").innerHTML = data[0].dlcName;
          //thiếu genre
          gameview_place.querySelectorAll(".game-descript p")[1].innerHTML = data[0].description;
          // thiếu rating
          gameview_place.querySelector(".game-type").innerHTML = "DLC";
          let gamePrice = gameview_place.querySelector(".game-price");
          if(data[0].price === 0){
            gamePrice.innerHTML = `<div class="free-price">Free</div>`;
          }else if(data[0].price === data[0].priceWithDiscount){
            gamePrice.innerHTML = `<div class="true-price"><p>$</p><p class="price-number">${data[0].price}</p></div>`;
          }else{
            gamePrice.innerHTML = `<div class="sale-price">
            <div class="sale-box">-${(1-data[0].priceWithDiscount/data[0].price) * 100}%</div>
            <div class="old-price">
                <p>$</p><p class="price-number">${data[0].price}</p>
            </div>
            </div>
            <div class="true-price"><p>$</p><p class="price-number">${data[0].priceWithDiscount}</p></div>`;
          }
          gameview_place.querySelectorAll(".dev p")[1].innerHTML = data[0].devName;
          let RD = "";
          for(let m = 0; m < 10; m++){
            RD += data[0].releaseDate[m];
          }
          gameview_place.querySelectorAll(".release-date p")[1].innerHTML = RD;
        }else{
          gameview_place.innerHTML = `<div class="game-head"></div>
          <div class="game-body">
              <div class="main-body">
                  <img src="./test8.jpg" alt="" class="game-img">
                  <div class="game-genre">
                      <div class="head">Genres</div>
                      <div class="genre">
                          <div>RPG</div>
                          <div>Action</div>
                          <div>MMO</div>
                      </div>
                  </div>
                  <div class="game-descript">
                      <p>About the game</p>
                      <p></p>
                  </div>
                  <div class="game-rating">
                      <div class="head">Game Rating</div>
                      <div class="star-cont">
                          <div class="stars-outer">
                              <div class="stars-inner"></div>
                          </div>
                          <span class="number-rating">3.5</span>
                      </div>
                  </div>
                  <div class="specification">
                      <p>Specification</p>
                      <div class="plat-table">
                          <div class="platform-req">
                              <div class="plat">WINDOWS</div>
                              <div class="minimum no">
                                  <div class="head">Minimum</div>
                                  <div class="os">
                                      <p>OS</p>
                                      <p></p>
                                  </div>
                                  <div class="cpu">
                                      <p>Processor</p>
                                      <p></p>
                                  </div>
                                  <div class="ram">
                                      <p>Memory</p>
                                      <p></p>
                                  </div>
                                  <div class="min-storage">
                                      <p>Storage</p>
                                      <p></p>
                                  </div>
                                  <div class="gpu">
                                      <p>Graphics</p>
                                      <p></p>
                                  </div>
                              </div>
                              <div class="recommended no">
                                  <div class="head">Recommended</div>
                                  <div class="os">
                                      <p>OS</p>
                                      <p></p>
                                  </div>
                                  <div class="cpu">
                                      <p>Processor</p>
                                      <p></p>
                                  </div>
                                  <div class="ram">
                                      <p>Memory</p>
                                      <p></p>
                                  </div>
                                  <div class="min-storage">
                                      <p>Storage</p>
                                      <p></p>
                                  </div>
                                  <div class="gpu">
                                      <p>Graphics</p>
                                      <p></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="core-info">
                  <img src="./test8-logo.jpg" alt="" class="game-logo">
                  <div class="game-type">BASE GAME</div>
                  <div class="game-price">
                  </div>
                  <div class="sale-range"></div>
                  <button class="add-cart">ADD TO CART</button>
                  <div class="core">
                      <div class="dev">
                          <p>Developer</p>
                          <p></p>
                      </div>
                      <div class="release-date">
                          <p>Release Date</p>
                          <p></p>
                      </div>
                      <div class="platform">
                          <p>Platform</p>
                          <p>Windows</p>
                      </div>
                  </div>
              </div>
          </div>`;

          gameview_place.querySelector(".game-head").innerHTML = data[0].gameName;
          //thiếu genre
          gameview_place.querySelectorAll(".game-descript p")[1].innerHTML = data[0].description;
          // thiếu ratin
          for(let k in data[0].sys_req){
            let minimum;
            if(k == 0){
              console.log("minimum");
              minimum = gameview_place.querySelector(".minimum");
            }else{
              console.log("recommended");
              minimum = gameview_place.querySelector(".recommended");
            }
            minimum.querySelectorAll(".os p")[1].innerHTML = data[0].sys_req[k].os;
            minimum.querySelectorAll(".cpu p")[1].innerHTML = data[0].sys_req[k].cpu;
            minimum.querySelectorAll(".ram p")[1].innerHTML = `${data[0].sys_req[k].ram} GB`;
            minimum.querySelectorAll(".min-storage p")[1].innerHTML = `${data[0].sys_req[k].minStorage} GB`;
            minimum.querySelectorAll(".gpu p")[1].innerHTML = data[0].sys_req[k].gpu;
          }
          // BASE GAME Default
          let gamePrice = gameview_place.querySelector(".game-price");
          if(data[0].price === 0){
            gamePrice.innerHTML = `<div class="free-price">Free</div>`;
          }else if(data[0].price === data[0].priceWithDiscount){
            gamePrice.innerHTML = `<div class="true-price"><p>$</p><p class="price-number">${data[0].price}</p></div>`;
          }else{
            gamePrice.innerHTML = `<div class="sale-price">
            <div class="sale-box">-${(1-data[0].priceWithDiscount/data[0].price) * 100}%</div>
            <div class="old-price">
                <p>$</p><p class="price-number">${data[0].price}</p>
            </div>
            </div>
            <div class="true-price"><p>$</p><p class="price-number">${data[0].priceWithDiscount}</p></div>`;
          }
          gameview_place.querySelectorAll(".dev p")[1].innerHTML = data[0].devName;
          let RD = "";
          for(let m = 0; m < 10; m++){
            RD += data[0].releaseDate[m];
          }
          gameview_place.querySelectorAll(".release-date p")[1].innerHTML = RD;
        }
        // addEvent addCartButton
        console.log(gameview_place.querySelector("button.add-cart"));
        gameview_place.querySelector("button.add-cart").addEventListener("click", ()=>{
          cartList.push(data[0]);
          console.log(cartList);
        });

        getRatings();
      });

      // Make it appears
      await document.querySelectorAll(".body").forEach((e) => {
        e.classList.add("no-display");
        if (e.classList.contains("gv")) e.classList.remove("no-display");
      });
      await window.scrollTo(0, 0);
    });
  });
};

// const removeLinkGameView = () => {
//   document.querySelectorAll(".game").forEach((a) => {
//     a.removeEventListener("click", () => {
//       // Get data
//       console.log(a);

//     });
//   });
// };

const initialBrowse = () => {
  let box = document.querySelector(".body6");
  box.innerHTML = "";
  getAllGame().then((data) => {
    // console.log(data);
      // console.log(data.length());
      let inner_tmp = `<div class="swiper-slide body6-inner">`;
      let c = 0;
      for (let i in data) {
        if(c === 12){
          c = 0;
          inner_tmp += `</div>`;
          box.innerHTML += inner_tmp;
          inner_tmp = `<div class="swiper-slide body6-inner">`;
        }
        c++;
        // console.log(c);
        let game_tmp = "";
        let type = data[i].hasOwnProperty("dlcId") ? "DLC" : "BASE GAME";
        let name = data[i].hasOwnProperty("dlcId") ? data[i].dlcName : data[i].gameName;
        if (data[i].price === 0) {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="free-price">Free</div></div>    
          </a>
          </div>  
          `;
        } else if (data[i].price === data[i].priceWithDiscount) {
          // console.log(true);
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="true-price"><p>$</p><p class="price-number">${data[i].price}</p></div></div>
          </a>
          </div> `; 
        } else {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price">
                  <div class="sale-price">
                    <div class="sale-box">-${(1-data[i].priceWithDiscount/data[i].price) * 100}%</div>
                    <div class="old-price">
                          <p>$</p><p class="price-number">${data[i].price}</p>
                      </div>
                  </div>
                  <div class="true-price"><p>$</p><p class="price-number">${data[i].priceWithDiscount}</p></div>
              </div>
          </a>
          </div> `;
        }
        // console.log(game_tmp);

        inner_tmp += game_tmp;        
      }

      if(c === 0){
        box.innerHTML = noGame;
      }
      else if(c < 12 && c > 0){
        for(c; c < 12; c++){
          inner_tmp += empty_game;
        }
        inner_tmp += `</div>`;
        box.innerHTML += inner_tmp;
      }
  }).then(()=>{
    // removeLinkGameView();
    setLinkGameView();

  });
}

initialBrowse();

// Browse page open
document.querySelector(".sub-head-browse").addEventListener("click", () => {
  document.querySelectorAll(".sub-head-e").forEach((e) => {
    e.classList.remove("underline");
    if (e.classList.contains("sub-head-browse")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e) => {
    e.classList.add("no-display");
    if (e.classList.contains("browse")) e.classList.remove("no-display");
  });

  // removeLinkGameView();
  // call API
  let box = document.querySelector(".body6");
  box.innerHTML = "";
  getAllGame().then((data) => {
    // console.log(data);
      // console.log(data.length());
      let inner_tmp = `<div class="swiper-slide body6-inner">`;
      let c = 0;
      for (let i in data) {
        if(c === 12){
          c = 0;
          inner_tmp += `</div>`;
          box.innerHTML += inner_tmp;
          inner_tmp = `<div class="swiper-slide body6-inner">`;
        }
        c++;
        // console.log(c);
        let game_tmp = "";
        let type = data[i].hasOwnProperty("dlcId") ? "DLC" : "BASE GAME";
        let name = data[i].hasOwnProperty("dlcId") ? data[i].dlcName : data[i].gameName;
        if (data[i].price === 0) {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="free-price">Free</div></div>    
          </a>
          </div>  
          `;
        } else if (data[i].price === data[i].priceWithDiscount) {
          // console.log(true);
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="true-price"><p>$</p><p class="price-number">${data[i].price}</p></div></div>
          </a>
          </div> `; 
        } else {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price">
                  <div class="sale-price">
                    <div class="sale-box">-${(1-data[i].priceWithDiscount/data[i].price) * 100}%</div>
                    <div class="old-price">
                          <p>$</p><p class="price-number">${data[i].price}</p>
                      </div>
                  </div>
                  <div class="true-price"><p>$</p><p class="price-number">${data[i].priceWithDiscount}</p></div>
              </div>
          </a>
          </div> `;
        }
        // console.log(game_tmp);

        inner_tmp += game_tmp;        
      }

      if(c === 0){
        box.innerHTML = noGame;
      }
      else if(c < 12 && c > 0){
        for(c; c < 12; c++){
          inner_tmp += empty_game;
        }
        inner_tmp += `</div>`;
        box.innerHTML += inner_tmp;
      }
      setLinkGameView();

  });

});

// Button to Browse
document.querySelector(".button7-learnmore").addEventListener("click", () => {
  document.querySelectorAll(".sub-head-e").forEach((e) => {
    e.classList.remove("underline");
    if (e.classList.contains("sub-head-browse")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e) => {
    e.classList.add("no-display");
    if (e.classList.contains("browse")) e.classList.remove("no-display");
  });
  window.scrollTo(0, 0);

  // removeLinkGameView();
  //call API
  let box = document.querySelector(".body6");
  box.innerHTML = "";
  getAllGame().then((data) => {
    // console.log(data);
    // console.log(data.length());
    let inner_tmp = `<div class="swiper-slide body6-inner">`;
    let c = 0;
    for (let i in data) {
      if(c === 12){
        c = 0;
        inner_tmp += `</div>`;
        box.innerHTML += inner_tmp;
        inner_tmp = `<div class="swiper-slide body6-inner">`;
      }
      c++;
      // console.log(c);
      let game_tmp = "";
      let type = data[i].hasOwnProperty("dlcId") ? "DLC" : "BASE GAME";
      let name = data[i].hasOwnProperty("dlcId") ? data[i].dlcName : data[i].gameName;
      if (data[i].price === 0) {
        game_tmp = `<div class="game">
        <a>
            <img src="./test8.jpg" class="game-img"></img>
            <h6 class="type">${type}</h6>
            <div class="title">${name}</div>
            <div class="price"><div class="free-price">Free</div></div>    
        </a>
        </div>  
        `;
      } else if (data[i].price === data[i].priceWithDiscount) {
        // console.log(true);
        game_tmp = `<div class="game">
        <a>
            <img src="./test8.jpg" class="game-img"></img>
            <h6 class="type">${type}</h6>
            <div class="title">${name}</div>
            <div class="price"><div class="true-price"><p>$</p><p class="price-number">${data[i].price}</p></div></div>
        </a>
        </div> `; 
      } else {
        game_tmp = `<div class="game">
        <a>
            <img src="./test8.jpg" class="game-img"></img>
            <h6 class="type">${type}</h6>
            <div class="title">${name}</div>
            <div class="price">
                <div class="sale-price">
                  <div class="sale-box">-${(1-data[i].priceWithDiscount/data[i].price) * 100}%</div>
                  <div class="old-price">
                        <p>$</p><p class="price-number">${data[i].price}</p>
                    </div>
                </div>
                <div class="true-price"><p>$</p><p class="price-number">${data[i].priceWithDiscount}</p></div>
            </div>
        </a>
        </div> `;
      }
      // console.log(game_tmp);

      inner_tmp += game_tmp;        
    }

    if(c === 0){
      box.innerHTML = noGame;
    }
    else if(c < 12 && c > 0){
      for(c; c < 12; c++){
        inner_tmp += empty_game;
      }
      inner_tmp += `</div>`;
      box.innerHTML += inner_tmp;
    }

    setLinkGameView();

  });

});

//Cart page open
document.querySelector(".sub-head-cart").addEventListener("click", () => {
  document.querySelectorAll(".sub-head-e").forEach((e) => {
    e.classList.remove("underline");
    if (e.classList.contains("sub-head-cart")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e) => {
    e.classList.add("no-display");
    if (e.classList.contains("cart")) e.classList.remove("no-display");
  });

  let cart_page__ = document.querySelector(".cart-body");
  let cart_page_list;

  for(let i in cartList){
    console.log(cartList[i]);
    let t = cartList[i].hasOwnProperty("dlcId") ? "DLC" : "BASE GAME";
    let n = cartList[i].hasOwnProperty("dlcId") ? cartList[i].dlcName : cartList[i].gameName;
    let game_price;
    if(cartList[i].price === 0){
      game_price = `<div class="free-price">Free</div>`;
    }
    else if(cartList[i].price === cartList[i].priceWithDiscount){
      game_price = `<div class="true-price"><p>$</p><p class="price-number">${cartList[i].price}</p></div>`;
    }
    else{
      game_price = `
      <div class="sale-price">
          <div class="sale-box">-${(1-cartList[i].priceWithDiscount/cartList[i].price) * 100}%</div>
          <div class="old-price">
              <p>$</p><p class="price-number">${cartList[i].price}</p>
          </div>
      </div>
      <div class="true-price"><p>$</p><p class="price-number">${cartList[i].priceWithDiscount}</p></div>`;
    }
    let game_template = `
    <div class="game-game">
        <div class="game-img"></div>
        <div class="game-content">
            <div class="type">${t}</div>
            <div class="title">${n}</div>
        </div>
        <div class="game-action">
            <div class="price">
            ${game_price}
            </div>
            <div class="remove">Remove</div>
        </div>
    </div>`;
    cart_page_list += game_template;
  }

  let totalPrice = 0;

  for(let i in cartList){
    if(cartList[i].price !== cartList[i].priceWithDiscount){
      totalPrice += cartList[i].priceWithDiscount;
    }
    else{
      totalPrice += cartList[i].price;
    }
  }

  cart_page__.innerHTML = `
  <div class="cart-game-list">
  ${cart_page_list}
  </div>
  <div class="payment-box">
    <div class="payment-head">Games Summary</div>
    <div class="total-field">
        <div class="field-name">Total Price</div>
        <div class="price">
            <p>$</p><p class="price-number payment-box-price">${totalPrice}</p>
        </div>
    </div>
    <div class="notice">* Already includes discount</div>
    <button class="checkout">CHECK OUT</button>
  </div>`;

  // cart_page__.querySelectorAll(".remove").forEach(ele => {
  //     ele.addEventListener("click", ()=>{
  //       let el =  ele.parentElement.parentElement;
  //       let name_rev = el.querySelector(".title").innerHTML;
  //       console.log(name_rev);
  //       cartList = cartList.filter((cartEl)=> (cartEl.gameName !== name_rev || cartEl.dlcName !== name_rev))
        
  //       let totalPrice = 0;

  //       for(let i in cartList){
  //         if(cartList[i].price !== cartList[i].priceWithDiscount){
  //           totalPrice += cartList[i].priceWithDiscount;
  //         }
  //         else{
  //           totalPrice += cartList[i].price;
  //         }
  //       }
  //       cart_page__.querySelector(".payment-box-price").innerHTML = totalPrice;
  //       el.remove();
  //     })
  // })

});

// Library page open
document.querySelector(".sub-head-library").addEventListener("click", () => {
  document.querySelectorAll(".sub-head-e").forEach((e) => {
    e.classList.remove("underline");
    if (e.classList.contains("sub-head-library")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e) => {
    e.classList.add("no-display");
    if (e.classList.contains("library")) e.classList.remove("no-display");
  });
  // removeLinkGameView();
  setLinkGameView();
});

// Discover page open
document.querySelector(".sub-head-discover").addEventListener("click", () => {
  document.querySelectorAll(".sub-head-e").forEach((e) => {
    e.classList.remove("underline");
    if (e.classList.contains("sub-head-discover")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e) => {
    e.classList.add("no-display");
    if (e.classList.contains("discover")) e.classList.remove("no-display");
  });
  // removeLinkGameView();
  setLinkGameView();
});


// Filter follow genre 
document.querySelectorAll(".body6-filter-genre").forEach( e => {
  e.addEventListener("click", () => {
    let box = document.querySelector(".body6");
    box.innerHTML = "";
    getGameGenre(e.innerHTML).then((data) => {
      // console.log(data);
      // console.log(data.length());
      let inner_tmp = `<div class="swiper-slide body6-inner">`;
      let c = 0;
      for (let i in data) {
        if(c === 12){
          c = 0;
          inner_tmp += `</div>`;
          box.innerHTML += inner_tmp;
          inner_tmp = `<div class="swiper-slide body6-inner">`;
        }
        c++;
        // console.log(c);
        let game_tmp = "";
        let type = data[i].hasOwnProperty("dlcId") ? "DLC" : "BASE GAME";
        let name = data[i].hasOwnProperty("dlcId") ? data[i].dlcName : data[i].gameName;
        if (data[i].price === 0) {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="free-price">Free</div></div>    
          </a>
          </div>  
          `;
        } else if (data[i].price === data[i].priceWithDiscount) {
          // console.log(true);
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="true-price"><p>$</p><p class="price-number">${data[i].price}</p></div></div>
          </a>
          </div> `; 
        } else {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price">
                  <div class="sale-price">
                    <div class="sale-box">-${(1-data[i].priceWithDiscount/data[i].price) * 100}%</div>
                    <div class="old-price">
                          <p>$</p><p class="price-number">${data[i].price}</p>
                      </div>
                  </div>
                  <div class="true-price"><p>$</p><p class="price-number">${data[i].priceWithDiscount}</p></div>
              </div>
          </a>
          </div> `;
        }
        // console.log(game_tmp);

        inner_tmp += game_tmp;        
      }

      if(c === 0){
        box.innerHTML = noGame;
      }
      else if(c < 12 && c > 0){
        for(c; c < 12; c++){
          inner_tmp += empty_game;
        }
        inner_tmp += `</div>`;
        box.innerHTML += inner_tmp;
      }

      // removeLinkGameView();
      setLinkGameView();
    });
  })
})

// Filter follow sale promotion
document.querySelectorAll(".sale-game").forEach( e => {
  e.addEventListener("click", () => {
    let box = document.querySelector(".body6");
    box.innerHTML = "";
    getSaleGame(e.innerHTML).then((data) => {
      // console.log(data);
      // console.log(data.length());
      let inner_tmp = `<div class="swiper-slide body6-inner">`;
      let c = 0;
      for (let i in data) {
        if(c === 12){
          c = 0;
          inner_tmp += `</div>`;
          box.innerHTML += inner_tmp;
          inner_tmp = `<div class="swiper-slide body6-inner">`;
        }
        c++;
        // console.log(c);
        let game_tmp = "";
        let type = data[i].hasOwnProperty("dlcId") ? "DLC" : "BASE GAME";
        let name = data[i].hasOwnProperty("dlcId") ? data[i].dlcName : data[i].gameName;
        if (data[i].price === 0) {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="free-price">Free</div></div>    
          </a>
          </div>  
          `;
        } else if (data[i].price === data[i].priceWithDiscount) {
          // console.log(true);
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price"><div class="true-price"><p>$</p><p class="price-number">${data[i].price}</p></div></div>
          </a>
          </div> `; 
        } else {
          game_tmp = `<div class="game">
          <a>
              <img src="./test8.jpg" class="game-img"></img>
              <h6 class="type">${type}</h6>
              <div class="title">${name}</div>
              <div class="price">
                  <div class="sale-price">
                    <div class="sale-box">-${(1-data[i].priceWithDiscount/data[i].price) * 100}%</div>
                    <div class="old-price">
                          <p>$</p><p class="price-number">${data[i].price}</p>
                      </div>
                  </div>
                  <div class="true-price"><p>$</p><p class="price-number">${data[i].priceWithDiscount}</p></div>
              </div>
          </a>
          </div> `;
        }
        // console.log(game_tmp);

        inner_tmp += game_tmp;        
      }

      if(c === 0){
        box.innerHTML = noGame;
      }
      else if(c < 12 && c > 0){
        for(c; c < 12; c++){
          inner_tmp += empty_game;
        }
        inner_tmp += `</div>`;
        box.innerHTML += inner_tmp;
      }

      // removeLinkGameView();
      setLinkGameView();
    });
    
  })
})




