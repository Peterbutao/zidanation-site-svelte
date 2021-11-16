<script>
    export let data;  

    if (data[0].title === "network error") {
        data = undefined;
    }  
    
    if(!!data) {
    
    
        $: inc = 0;
        $: len = data.length - 1;
        function incfunc() {
            
            inc++
            if (inc > len) {
                return inc = 0;
            }
            return inc
        }
    }

</script>


<div class="cont">


<p class="top-title">ALBUM</p>
{#if !data}
<section style="filter: grayscale(60%); background-image: url('/src/lib/assets/img/bg.png')" class="fourth-section">
    <div class="frth-sect">
        <main>
            <ul class="album-txt-sect">
                <li class="alb-date">
                    <p>Albums not found, try reloading the page over the network</p>
                </li>
            </ul>
        </main>
    </div>
</section>
{/if}
{#if !!data}
{#each [data[inc]] as album}
<section style="background-image: url({album.image});" class="fourth-section">

    <div class="frth-sect">
       
        <main>
            <ul class="album-txt-sect">
                {#each [data[inc]] as album}
                <li class="alb-title">
                    <h1>{album.title.toUpperCase()}</h1>
                </li>
                <li class="alb-date">
                    <p>{album.date}</p>
                </li>
                <li class="alb-">
                    <table>
                        <tbody>
                            <tr>
                                <td>GENRE : </td>
                                <td>{album.genre}</td>
                            </tr>
                            <tr>
                                <td>ARTIST : </td>
                                <td>{album.artist}</td>
                            </tr>
                            <tr>
                                <td>SONGS : </td>
                                <td>{album.songs}</td>
                            </tr>
                            <tr>
                                <td>RECOR :</td>
                                <td>{album.records}</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
     
                <li class="alb-links">
                    {#if data.length > 1}
                    <p on:click={incfunc}>NEXT</p>
                    {/if}
                    <a href="/album/{album.id}">
                        <div class="al-txt">
                            <p>
                                VIEW SONGS LIST
                            </p>
                        </div>
        
                        <div class="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                <path d="M6.606,1.789a1,1,0,0,1,1.789,0l5.882,11.764A1,1,0,0,1,13.382,15H1.618a1,1,0,0,1-.894-1.447Z" transform="translate(15) rotate(90)" fill="red"/>
                            </svg>
                        </div>
                    </a>
                </li>
                {/each}

            </ul>

        </main>
        <header>
            <div class="song-img-sect">
                {#each [data[inc]] as album}

                <div class="sng-img">
                    <img src={album.image} alt="album cover">
                </div>
                <div class="sng-foot"></div>
                {/each}

            </div>
        </header>
    </div>
</section>
{/each}
{/if}
</div>
<style lang="scss">
    @mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;
    }
    .cont{
        background: var(--bc);
        .top-title{
            text-align: end;
            margin: auto;
            max-width: var(--bw);
            padding-top: 0.625rem;
            @include font(var(--tc),2.8125rem, 500);
        }
    }

    .fourth-section{
        background-repeat: no-repeat;
        background-size: cover;
        background-color:rgba(0, 0, 0, 0.822);
        background-blend-mode: multiply;
    
        .frth-sect{
            margin: auto;
            max-width: var(--bw);
            display: flex;
            justify-content: space-between;
            padding: 0px 0.625rem;

            main{
                
                ul{
                    list-style: none;
                    
                    display: flex;
                    flex-direction: column;
                    .alb-date{
                        @include font(var(--wc), 0.91rem, 400);
                    }
                    .alb-links{
                        margin-top: 10%;
                        padding: 0px 0.3125rem;
                        display: flex;
                        align-items: center;
                        p{
                            border: none;
                            height: 100%;
                            @include font(var(--wc), 1rem, 400);
                            background: none;
                            cursor: pointer;
                            padding-left: 0;
                            margin-right: 0.625rem;
                            transition: all 1s ease;
                            &:hover{
                                color: var(--trc);
                                border-bottom: white solid 1px;
                            }
                        }
                    }
               
                    li{
                        h1{
                            @include font(var(--wc), 2.8125rem, 650);
                            line-height: 2px;
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            background-color: var(--trc);
                            width: 15.625rem;
                            padding: 0px 0.625rem;
                            text-decoration: none;
                            @include font(var(--wc), 1rem, 400);
                           
                        }
                        table{
                            tbody{
                                tr{
                                    td{
                                        @include font(var(--wc), 0.91rem, 400);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            header{
                .song-img-sect{
                    
                    .sng-img{
                        width: 21.875rem;
                        height: 21.875rem;
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
        .alb-title{
            h1{
                font-size: 1.875rem !important;
               
            }
        }
        .song-para{
            font-size: 0.7rem !important;
        }
        .sng-img{
            width:  15.625rem !important;
            height:  15.625rem !important;
        }

    }
    @media screen and (max-width: 685px) {
        .alb-title{
            h1{
                font-size: 1.6625rem !important;
                
            }
        }
        .song-para{
            font-size: 0.8rem !important;
        }
        .sng-img{
            width:  21.875rem !important;
            height:  21.875rem !important;
        }
        .frth-sect{
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





