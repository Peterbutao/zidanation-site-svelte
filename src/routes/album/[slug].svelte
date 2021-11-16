<script context="module">
    export async function load({page, fetch}) {
        const res = await fetch("/api");
        const data = await res.json();
        const slug = page.params.slug;
        
        return{
            props :{
                slug,
                data
               
            }
        }

    }
</script>


<script>

    export let slug;
    export let data;
    import Footer  from "$lib/components/Footer.svelte";


    

    $: dt = data.albums.filter( (item) => {
        return item.id == slug;
    })
    $: next = data.albums.filter( (item) => {
        return item.id !== slug;
    })

</script>
<section class="album-section">
    <div class="alb-sect">

       
        <main>
            <div class="song-card">
               

                    {#each dt as album}
                    

                    <div class="card">
                        <img  class="song-img"  width="100px" height="100px" src="{album.img}" alt="song cover">
                        <div class="song-title">
                            <p>{album.title}</p>
                        </div>
                        <div class="song-text">
                            <p>{album.date}</p>
                        </div>
                        <div class="song-text">
                            <p>{album.artist}</p>
                        </div>
                        {#each album.list as list}
                        
                        <a href={list.source} download={list.title} class="alb-list">{list.title}</a>
                        {/each}

                    </div>

                    {/each}
                

            </div>
          
        </main>

        <footer>
            <div class="ft">
                {#each next as album}
                <div class="next">
                    <span>#</span>
                    <span>
                        <a href="/album/{album.id}">{album.title}</a>
                    </span>
                </div>
                {/each}
            </div>
        </footer>
        {#if data.albums[0].title != "network error"}
        <Footer data={data}/>
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
   
    .song-card{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .card{
            width: calc(30% - 20px);
            border-radius: 6px;
            margin: 10px 0px;
            padding:  10px;
    
            cursor:pointer;
            transition: .3s linear;
            .song-img{
                margin-bottom: 20px;
                transition: .3s linear;
                width: 100%;
                height:auto;
                object-fit: cover;
            }
            .song-title{
                  text-align: center;
                @include font(var(--tc), 1.2rem, 200);
                margin-bottom: 6px;
            }
            .song-text{
                text-align: center;
                @include font(var(--tc), 0.9rem, 100);                
                margin-bottom: 6px;
            }
            .alb-list{
                display: block;
                text-align: start;
                padding: 0px 10px;
                margin: 15px 0px;
                @include font(var(--tc), 0.9rem, 100);                
                margin-bottom: 6px;
            }
            

        }
    }
    .album-section{

        background: var(--bc);
        min-height: 100vh;
        .alb-sect{
            margin: auto;
            padding-top: 10vh;
            max-width: var(--bw);

            
        }
    }
    footer{
        .ft{
            .next{
                margin: 10px 0px;
                padding: 10px 5px;
                background: var(--trc);
                span{
                    a{
                        text-decoration:none;
                        @include font(var(--tc), 1rem, 200);
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