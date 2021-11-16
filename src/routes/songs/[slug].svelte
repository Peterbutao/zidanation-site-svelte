<script context="module">
    export async function load({page, fetch}){
        const slug = page.params.slug;
        const res = await fetch("/api");
        const data = await res.json();

            
        return{
            props :{
                slug,
                data
            }
        }
    }
</script>

<script>
    import Footer from "$lib/components/Footer.svelte";
    export let slug;
    export let data;


    let player

    
    $: search = "";
    $: searchItem = data.songs.filter((item) => {
        return item.title.includes(search)
    })

</script>
<section class="music-section">
    <div class="msc-sect">

        <header>
            <form class="search">
                <div class="srcg">
                    <input type="text" bind:value={search} placeholder="search">
                </div>          
            </form>
               
        </header>
        <main>
            <div class="song-card">
                {#if searchItem.length}

                    {#each searchItem as song}
                    <div class="card">
                        <audio
                            bind:this={player}
                            src={song.source}
                            controls
                        >
                            <track kind="captions" />
                        </audio>
                    
                

                        <a href={song.source} download={song.title} class="download">
                            
                        
                            <div class="song-title">
                                <p>{song.title}</p>
                            </div>
                            <div class="song-text">
                                <p>{song.artist}</p>
                            </div>

                        </a>
                   </div>
                    {/each}
                {:else}
                    <p>{search} not found</p>
                {/if}

            </div>
          
        </main>
        
        {#if data.songs[0].title != "network error"}
        <Footer data={data} />
        {/if}
    
        
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


    .music-section{
        padding: 10px 0px;
        background: var(--bc);
        min-height: 100vh;
        .msc-sect{
            margin: auto;
            padding-top: 20vh;
            max-width: var(--bw);
            header{
                form{
                    position: relative;

                    padding: 0 8px;

                    div{
                        input{
                            border: none;
                            width: 100%;
                            height: 45px;
                            background: var(--trc);
                            box-shadow: none !important;
                            border-radius: 4rem;
                            color: rgb(0, 0, 0);
                            
                            overflow: hidden;
                            
                                
                        }
                        input::placeholder{
                            @include font(var(--tc), 0.94rem, 200);
                            text-align: center;

                        }
                        input:focus{
                            outline: none;
                        }
                    
                    }
                }
            }
            main{
                                
                .song-card{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .card{
                        audio{
                            width: 100%;
                            &::-webkit-media-controls-enclosure{
                                border-radius: 1px;
                                background-color: hsla(0, 100%, 50%, 0.053);
                            }
                            &:focus{
                                outline: transparent solid 0.1px;
                            }
                        }
                   
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
