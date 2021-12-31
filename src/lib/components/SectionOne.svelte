
<section class="first-section">
    <div class="first-sect">
        <div class="textarea">
            <main>
                <div class="main-text">
                    <h1 class="mnt-1">
                        Discover
                    </h1>
                    <h1 class="mnt-2"> 
                        Your Perfect
                    </h1>
                    <h1 class="mnt-3">
                        Sound
                    </h1>
                </div>
                <div class="mn-subtext">
                    <p>ITS JUST NOT MUSIC, ITS <span>ZIDA</span></p>
                </div>
            </main>

            <div class="explore">
                <a aria-lebel="view audio files on music page" href="/songs/slug" class="exp">

                    <div class="exp-txt">
                        <p>
                            EXPLORE
                        </p>
                    </div>


                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.292" height="26.3" viewBox="0 0 26.292 26.3">
                            <g transform="translate(30 -1.85) rotate(90)" fill="none">
                                <path d="M12.317,5.367a3,3,0,0,1,5.367,0L24.152,18.3l3.677,7.355A3,3,0,0,1,25.146,30H4.854a3,3,0,0,1-2.683-4.342Z" stroke="none"/>
                                <path d="M 15.00000190734863 4.708198547363281 C 14.22601222991943 4.708198547363281 13.55728149414063 5.121500015258789 13.21115112304688 5.81376838684082 L 3.065252304077148 26.10556983947754 C 2.752992630004883 26.73007965087891 2.785722732543945 27.45751953125 3.152801513671875 28.05146026611328 C 3.519882202148438 28.64540863037109 4.155881881713867 29 4.854101181030273 29 L 25.14590072631836 29 C 25.8441219329834 29 26.48012161254883 28.64540863037109 26.84720230102539 28.05146026611328 C 27.21428108215332 27.45751953125 27.24701118469238 26.73007965087891 26.93475151062012 26.10556983947754 L 23.25733184814453 18.75074005126953 L 16.78885269165039 5.813779830932617 C 16.44271087646484 5.121500015258789 15.77398204803467 4.708198547363281 15.00000190734863 4.708198547363281 M 15.00000190734863 3.70820426940918 C 16.06525039672852 3.70820426940918 17.13049697875977 4.260990142822266 17.68328094482422 5.366559982299805 L 24.15176200866699 18.30352783203125 L 27.82918167114258 25.65835952758789 C 28.8265323638916 27.6530590057373 27.37604141235352 30 25.14590072631836 30 L 4.854101181030273 30 C 2.623950958251953 30 1.173471450805664 27.6530590057373 2.170822143554688 25.65835952758789 L 12.31672096252441 5.366559982299805 C 12.8695068359375 4.260990142822266 13.93475532531738 3.70820426940918 15.00000190734863 3.70820426940918 Z" stroke="none" fill="#f20e0e"/>
                            </g>
                        </svg>
                    </div>

                </a>
            </div>

        </div>

        <div class="imgarea" itemscope itemtype="https://schema.org/ImageObject" >
            <img width="500px" height="500px" src="./bg.png" alt="logo">

        </div>

    </div>
</section>

<style lang="scss">
    @mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;
    }
    .first-section{
        background: var(--bc);
        
        display: flex;     
        min-height: 100vh;
        .first-sect{
            max-width: var(--bw) !important;
            flex:1;
            margin: auto;
            display: flex;
            justify-content: space-between;
            
            align-items: center;
            position: relative;
            .imgarea{
                position: relative;
                
                display:flex;
                justify-content: center;
                align-items: center;
                img{
                    position: relative;
                    width: 350px;
                    height: auto;
                }

            }
            .imgarea::before{
                    content: '';
                    position:absolute;
                    width: 200px;
                    height: 200px;
                    top: 50%;
                    right: 50%;
                    background: var(--trc);
                    border-radius: 50%;
                    opacity: 50%;
                }

            .textarea{
                position: relative;
                flex: 1;
                /*main*/
                main{
                    margin-top: auto;
                    .mn-subtext{
                        @include font(var(--tc), 0.7em, 500);
                        span{
                            color: var(--rc);
                            font-weight: 800;
                        }
                    }
                    .main-text{
                        h1{
                            @include font(var(--tc), 3em, 700);
                            line-height: 0.09em;
                        }
                        .mnt-2{
                            font-size: 3.5em;
                            font-weight: 650;
                            line-height: 0.3em;
                            letter-spacing: 0.1em;
                        }
                    }
                }
                /*explore*/
                .explore{
                    background: var(--trc);
                    border-radius: 4rem;
                    width: 200px;
                    padding: 0px 5px;
                    margin: 15px 0px;
                    audio{
                        background: red;
                        width: 80px;
                        height: 80px;
                    }
                    .exp{
                        display: flex;
                        align-items:center;
                        justify-content: space-between;
                        padding: 0px 10px;
                        text-decoration: none;
                        
                        .exp-txt{
                            p{
                                @include font(var(--tc), 1rem, 400);
                            }
                        }
                        .svg{
                            width: 30px;
                        }

                    }
                }
            }
            
            




        }
    }
  
    @media screen and (max-width: 850px) {

        .first-sect{
            flex-direction: column-reverse;
            padding-top: 10vh;
            .imgarea{
                width: 100%;
            }
            .textarea{
                width: 100%;
            }
        }



    }
    @media screen and (max-width: 450px) {

        .first-sect{
            .textarea{
                main{
                    .main-text{
                        h1{
                            font-size:2.5em !important;
                        }
                    }
                }

            }
          
        }



    }
    @media screen and (max-width: 355px) {

        .first-sect{
            .imgarea{
                img{
                    width: 250px !important;
                }
            }
          
        }



    }
    @media screen and (max-width: 300px) {

        .first-sect{
            .textarea{
                main{
                    .main-text{
                        h1{
                            font-size: 2em !important;
                        }
                    }
                }
            }
          
        }



    }
    @media screen and (max-width: 295px) {

        .first-sect{
            .imgarea{
                img{
                    width: 150px !important;
                }
            }
          
        }



    }
    @media screen and (max-width: 235px) {

       
        .first-sect{
            .textarea{
                main{
                    .main-text{
                        h1{
                            font-size: 1.5em !important;
                        }
                    }
                }
            }
          
        }



    }

</style>