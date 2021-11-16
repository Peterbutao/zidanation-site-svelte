<section class="six-section">
    <div class="six-sect">

        <header>
            <h1 class="title">
                STREAM
                <strong>ZD</strong>
                MUSIC
            </h1>
        </header>
        <main>
            <ul class="strm-list">
                <li><a href="/">Deezer</a></li>
                <li><a href="/">Audio Mack</a></li>
                <li><a href="/">Spotify</a></li>
                <li><a href="/">Sound Cloud</a></li>
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
    .six-section{
        background: var(--bc);
        
      

        .six-sect{

            text-align: right;
            margin: auto;
            max-width: var(--bw);
            border-bottom: solid red 2.8px;
            padding: 10px;
            
            header{
                h1{
                    @include font(var(--tc), 45px, 400);
                    margin: 0;
                    
                    strong{
                        color: var(--rc);
                    }
                }
            }
            main{
                ul{
                    list-style: none;
                    padding: 0;
                    li{
                        margin: 20px 0px;

                        a{
                            text-decoration: none;
                            @include font(var(--tc), 1rem, 400);
                        }
                    }
                }
            }
        }
    }
</style>