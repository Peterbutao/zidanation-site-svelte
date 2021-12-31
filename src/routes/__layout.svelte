<svelte:head>
    <meta name="description" content="Malawian music, by Malawi from ZIDA NATION. ">
    <meta name="keywords" content="Malawi, Music, ZIDA, ZIDA NATION, Kamlad">
    <meta name="author" content="Butao Peter">
 
  
</svelte:head>


<script>

   
    $: clip = false;
    $: dark = true;

</script>

<div class="layout" class:dark={dark}>
    <nav class="nav-bar">
        <div class="nb">
            <h1 class="brand">
                <a href="/">
                    ZIDA<strong>N</strong>ATION                                       
                </a>
            </h1>

            <div on:click={() => {clip = !clip}} class="hamburger">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>

            <ul class:clip={clip} class="nav-list">
                <li on:click={() => {clip = !clip}}><a href="/album/slug">ALBUMS</a></li>
                <li on:click={() => {clip = !clip}}><a href="/songs/slug">MUSIC</a></li>
                <li on:click={() => {clip = !clip}}><a href="/contact">CONTACT</a></li>
                <li on:click={() => {clip = !clip}}><a href="/about">ABOUT</a></li>
                <li on:click={() => {clip = !clip; dark = !dark}} class="nl">
                    {#if dark === false}
                    <svg xmlns="http://www.w3.org/2000/svg" width="96.702" height="92.897" viewBox="0 0 96.702 92.897"><path d="M168-97a49.691,49.691,0,0,1-28.642-9.011,50.229,50.229,0,0,1-10.722-10.155A49.885,49.885,0,0,1,121.3-129.1a49.748,49.748,0,0,0,12.143,5.242A50.1,50.1,0,0,0,147-122a49.688,49.688,0,0,0,19.463-3.929,49.834,49.834,0,0,0,15.893-10.715,49.833,49.833,0,0,0,10.715-15.893A49.686,49.686,0,0,0,197-172a49.792,49.792,0,0,0-3.3-17.9A50.314,50.314,0,0,1,211.31-172a49.74,49.74,0,0,1,4.941,11.844A50.135,50.135,0,0,1,218-147a49.686,49.686,0,0,1-3.929,19.462,49.833,49.833,0,0,1-10.715,15.893,49.834,49.834,0,0,1-15.893,10.715A49.686,49.686,0,0,1,168-97Z" transform="translate(-121.298 189.897)" fill="#1a0000"/></svg>
                    {/if}
                    {#if dark === true}
                    <svg xmlns="http://www.w3.org/2000/svg" width="96.702" height="92.897" viewBox="0 0 96.702 92.897"><path d="M168-97a49.691,49.691,0,0,1-28.642-9.011,50.229,50.229,0,0,1-10.722-10.155A49.885,49.885,0,0,1,121.3-129.1a49.748,49.748,0,0,0,12.143,5.242A50.1,50.1,0,0,0,147-122a49.688,49.688,0,0,0,19.463-3.929,49.834,49.834,0,0,0,15.893-10.715,49.833,49.833,0,0,0,10.715-15.893A49.686,49.686,0,0,0,197-172a49.792,49.792,0,0,0-3.3-17.9A50.314,50.314,0,0,1,211.31-172a49.74,49.74,0,0,1,4.941,11.844A50.135,50.135,0,0,1,218-147a49.686,49.686,0,0,1-3.929,19.462,49.833,49.833,0,0,1-10.715,15.893,49.834,49.834,0,0,1-15.893,10.715A49.686,49.686,0,0,1,168-97Z" transform="translate(-121.298 189.897)" fill="#fff5ee"/></svg>
                    {/if}
                </li>
            </ul>
        </div>
    </nav>
    <main >
        <slot></slot>
    </main>

</div>

<style lang="scss">
    :global(body){
        margin: 0;
        padding: 0;
        box-sizing: border-box;


    }
    @mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;
        
    }
    :root{
        //dynamic
        --tc: #333;
        --bc: #fff5ee;
        //color
        --rc: red;
        --trc: rgba(255, 0, 0, 0.24);
        --wc: white;
        //width
        --bw: 980px;
    }
    .dark{
        --bc: hsl(0, 100%, 5%);
        --tc: seashell;
    }

    
    /* javascript classes */
    .clip{
        clip-path: circle(1800px at 95%) !important;
        -webkit-clip-path: circle(1800px at 95%) !important;
        pointer-events: all !important;
    }
   
    .layout{
        /*navigation*/
        .nav-bar{
            z-index: 999;
            background:var(--bc);
            position: fixed;
            width: 100%;
            top: 0;
            left:0;
            .nb{
                .hamburger{
                    display: none;
                }

                display: flex;
                max-width: var(--bw);
                margin: auto;
                padding-top: 3vh;
                align-items: center;
                

                .nav-list{
                    list-style: none;
                    display: flex;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    margin-left: 10px;
                    .nl{
                        margin-left: auto;
                        cursor: pointer;
                        padding: 0 !important;
                    }
                    
                    li{
                        margin: 0px 10px;
                        padding: 0;
                        a{
                            margin:0;                            
                            text-decoration: none;
                            @include font (var(--tc), 0.7rem, 500);
                        }
                        svg{
                            z-index:999;
                            width: 25px;
                            height: 25px;

                            
                        }
                    }
                }

                .brand{
                    margin:0;
                    margin-right: 10px;
                    
                    a{
                        strong{
                            color: var(--rc);
                            margin-left: 3px;
                            
                        }
                        text-decoration: none;
                        @include font(var(--tc), 0.94rem, 900);
                        
                        
                        
                    }
                }

            }
        }
    }
    @media screen and (max-width: 850px) {
        .nav-bar{
            height: 6vh;
            padding-top: 15px;
            .nb{
                position: relative;
                padding-top: 0 !important;
                padding: 0 10px;
                
            }
        }

        .hamburger{
            z-index: 999;
            position: absolute;
            right: 5%;
            top: 20%;
            display: flex !important;
            flex-direction: column;
            cursor: pointer;
            div{
                background: var(--tc);
                height: 2.5px;
                width: 30px;
            }
            .line-2{
                margin: 6px 0px;
                width: 25px;
                height: 3px;
            }
        }
        .nav-list{
            z-index: 99;
            position: fixed;
            background: var(--bc);
            top: 0;
            left: 0;
            margin: 0 !important;
            height: 100vh;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            clip-path:circle(0px at 95%) ;
            -webkit-clip-path: circle(0px at 95%);
            transition: all 1s ease;
            pointer-events: none;
            li{
                padding-top: 30px !important;
                a{
                    font-size: 1rem !important;
                    color: var(--tc) !important;
                    
                }
            }
            .nl{
                margin: 30px 10px !important;
            }

        }
        
    }
  
  
</style>