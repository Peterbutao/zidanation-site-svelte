<script>
    export let data;
    if (data[0].title === "network error") {
        data = undefined;
    }
    let player;
</script>

<section class="second-section">
    <div class="snd-sect">

        <header>
            <div class="song-img-sect">

                <div class="sng-img">
                    {#if !data}
                    <img style="filter:grayscale(80%);border:1px var(--tc) solid; opacity:80%;background: black; background-blend-mode:multiply;" src="./bg.png" loading="lazy" alt="song cover artwork ">
                    
                    {/if}
                    {#if !!data}
                    {#each [data[0]] as song}
                    <img src={song.image} loading="lazy" alt="song cover artwork ">
                    {/each}
                    {/if}
                </div>
                <div class="sng-foot"></div>

            </div>
        </header>

        <main>
            <ul class="sng-txt-sect">
                {#if !data}
                <li class="page-title">
                    <p>MUSIC</p>
                </li>
                <li class="song-title">
                    <h1>ZIDA NATION</h1>
                </li>
                <li class="song-para">
                    <p> best musical hits and new songs that you can listen online and absolutely free on our website. Perfect search, thoughtful navigation, a huge base of tracks, songs, albums and artists.Listen to music and stay with ZIDA! 
                    </p>
                    
                </li>
                <li class="page-link">
                    <a href="/songs/slug">
                        <div class="pl-txt">
                            <p>
                                LISTEN
                            </p>
                        </div>       
                    </a>
                </li>
                {/if}
                {#if !!data}
                {#each [data[0]] as song}
                <li class="page-title">
                    <p>MUSIC</p>
                </li>
                <li class="song-title">
                    <h1>{song.title.toUpperCase()}</h1>
                </li>
                <li class="song-para">
                    <p> best musical hits and new songs that you can listen online and absolutely free on our website. Perfect search, thoughtful navigation, a huge base of tracks, songs, albums and artists.Listen to music and stay with ZIDA! 
                    </p>
                    
                </li>
                <li class="page-link">
                    <a href="/songs/{song.title}">
                        <div class="pl-txt">
                            <p>
                                LISTEN
                            </p>
                        </div>
                        <audio
                            bind:this={player}
                            src={song.source}
                            controls>
                            <track kind="captions" />
                        </audio>
        
                       
                    </a>
                </li>
                {/each}
                {/if}
            </ul>
        </main>
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
    .second-section{
        background: var(--bc);
        margin: 0!important;
        .snd-sect{
            margin: auto;
            max-width: var(--bw);
            display: flex;
            justify-content: center;
            padding: 0px 10px;
            main{
                ul{
                    list-style: none;
                    .page-title{
                        @include font(var(--tc), 1rem, 400);
                        line-height: 1px;
                    }
                    .song-para{
                        @include font(var(--tc), 1rem, 400);
                        line-height: 20px;
                    }
                    
                    li{
                        
                        h1{
                            @include font(var(--tc), 45px, 450);
                            line-height: normal;
                        }
                        a{
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            width: 180px;
                            padding: 0 10px;
                            border-top-right-radius: 4rem;
                            border-bottom-right-radius: 4rem;
                            background: var(--trc);
                            audio{
                                width: 100%;
                                padding: 0 !important;
                                &:focus{
                                    outline: none;
                                }                
                                &::-webkit-media-controls-timeline{
                                    display: none;
                                
                                }
                                &::-webkit-media-controls-play-button{
                                    
                                    padding: 0;
                                    margin:0;
                                
                                }
                            
                                &::-webkit-media-controls-enclosure{
                                    
                                    padding-right: 0px !important;
                                    margin: 0 !important;
                                    padding: 0 !important;
                                    border-radius: 1px;
                                    background: none;
                                
                                }
                                &::-webkit-media-controls-mute-button{
                                    display: none;
                                
                                }
                                &::-webkit-media-controls-current-time-display{
                                    display: none;
                                
                                }
                                &::-webkit-media-controls-time-remaining-display{
                                    display: none;
                                
                                }
                              
                            }
                            

                            .pl-txt{
                                p{
                                    @include font(var(--tc), 1rem, 400);
                                }
                            }
                        }
                    }
                }
            }

            header{
                .song-img-sect{
                    
                    .sng-img{
                        width: 350px;
                        height: 350px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }

        }
    }
    @media screen and (max-width: 750px) {
        .song-title{
            h1{
                font-size: 30px !important;
            }
        }
        .song-para{
            font-size: 0.7rem !important;
        }
        .sng-img{
            width: 250px !important;
            height: 250px !important;
        }

    }
    @media screen and (max-width: 685px) {
        .song-title{
            h1{
                font-size: 45px !important;
            }
        }
        .song-para{
            font-size: 0.8rem !important;
        }
        .sng-img{
            width: 350px !important;
            height: 350px !important;
        }
        .snd-sect{
            flex-direction: column;
        }
        main{
            ul{
                padding: 0 !important;
            }
        }
       
    }
    @media screen and (max-width: 685px) {
        .sng-img{
            width: 100% !important;
        }
    }
</style>





