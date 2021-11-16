<script>
    export let data;
    if (data[0].title === "network error") {
        data = undefined;
    }
</script>
<section class="firfith-section">
    <div class="firf-sect">

        <header>
            <div class="header-txt">
                <div class="pre-title">
                    <p>SONGS LIST</p>
                </div>
                <div class="title">
                    <h1>EXCRUSIVE BEAT</h1>
                </div>
                <div class="sub-title">
                    <p>EXPLORE YOUR PERFECT SOUND</p>
                </div>
            </div>
        </header>
        <main>
            <div class="song-card">

                {#if !data}
                 <div class="card" style="background: #4e4e4e; filter: grayscale(50%)">
                    <img  style="filter: grayscale(80%)" class="song-img" loading="lazy" width="100px" height="100px" src="/src/lib/assets/img/bg.png" alt="song cover">
                 
                    <div class="song-title">
                        <p style="color: seashell; filter:opacity(75%)">Songs not found</p>
                    </div>
                    <div class="song-text">
                        <p style="color: seashell; filter:opacity(75%)">try to reload this page over the network</p>
                    </div>
                    

                </div>
                {/if}

                {#if !!data}              
                {#each data as song}


                <div class="card">
                    <img  class="song-img" loading="lazy" width="100px" height="100px" src="{song.image}" alt="song cover">
                 
                    <div class="song-title">
                        <p>{song.title}</p>
                    </div>
                    <div class="song-text">
                        <p>{song.artist}</p>
                    </div>
                    <a href={song.source} download={song.title} >
                       <p >download</p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L8.905,12.186l-2.36,2.36L8,16l8-8Z" transform="translate(16) rotate(90)" fill="#1a0000"/></svg>
                    </a>

                </div>
                {/each}
                {/if}
            

            </div>
          
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

    .firfith-section{
        background: var(--bc);
        .firf-sect{
            margin: auto;
            padding:30px 10px;
            max-width: var(--bw);
            /*header*/

            header{
                .header-txt{
                    .pre-title{
                        @include font(var(--tc), 1rem, 400);
                    }
                    .title{
                        h1{
                            @include font(var(--tc), 45px, 400);
                            
                        }
                    }
                    .sub-title{
                        @include font(var(--tc), 1rem, 400);
                        text-align: end;
                    }
                }
            }
            /*main*/
            main{
                .song-card{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .card{
                        width: calc(30% - 20px);
                        text-align: center;
                        border: 1px solid var(--trc);
                        border-radius: 6px;
                        margin: 10px 0px;
                        padding:  10px;
                
                        cursor:pointer;
                        transition: .3s linear;
                        .song-img{
                            margin-bottom: 20px;
                            transition: .3s linear;
                            width: 100%;
                            height:100px;
                            object-fit: cover;
                        }
                        a{
                            text-decoration: none;
                            @include font(var(--tc), 1.2rem, 100);
                            display: flex;
                            align-items: center;
                            background: var(--trc);
                            justify-content: flex-end;
                            &:hover{
                                background: rgba(160, 154, 154, 0.275);
                                
                            }
                            svg{
                                padding:10px;
                            }
                            p{
                                padding: 0 10px;
                            }
                                                        
                        
                        }
                        .song-title{
                            @include font(var(--tc), 1.2rem, 200);
                            margin-bottom: 6px;
                        }
                        .song-text{
                            @include font(var(--tc), 0.9rem, 100);
                            
                            margin-bottom: 6px;
                        }
                        &:hover{
                            color: var(--tc) !important;
                            background-color: var(--nv) !important;
                            border: none !important;
                            box-shadow: rgba(0, 0, 0, 0.412) 5px 5px 1px 1px;
                            transform: scale(102%);
                        }

                    }
                }
            }
            
        }
    }
    @media screen and (max-width: 980px){
        
        .card{
            width: calc(50% - 20px) !important;


        }

    }
    @media screen and (max-width: 600px){
       
        .card{
            width: 100% !important;


        }

    }
</style>
