<script context="module" >
    export function load({error, status}) {
        
        return{
            props :{
                error: error.message,
                status: status

            }
        }
    }
</script>


<script>
    export let error;
    export let status; 
</script>

<section class="error-section">
    <article class="error-sect">
        <div class="title">
            <h1>ERROR</h1>
        </div>
        <div class="content">
            <main class="ctnt">

                <div class="ctnt-box">
                    <div class="cb">
                        <h1>{status}</h1>
                        <p>{error}</p>
                    </div>
                </div>

                <div class="ctnt-msg">
                    <div class="cm">
                        <p>looks like, theres a {status} error. if the error persist contact our dev team <a href="https://github.com/Peterbutao/">BUTAO</a> to let us know. Or raise an issue on <a href="https://github.com/Peterbutao/zd-website-svelte.git/issues">GITHUB</a>.</p>
                    </div>
                </div>
            </main>
        </div>
        <div class="foot">
            <footer>
                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="16" height="16" fill="none"/><path d="M1.655,1.655v12.69H9.563V16H0V0H9.563V1.655ZM9.011,13.241,7.724,11.954l2.943-2.943h-6.8V7.172h6.989L7.724,4.23,9.011,2.943l4.966,4.966Z" transform="translate(2)" fill="#fff"/></g></svg></a>
            </footer>
        </div>
    </article>
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
    .error-section{
        background: var(--bc);
        height: 100vh;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .error-sect{
            margin: 0 auto;
            max-width: var(--bw);       

            .title{
                h1{
                    margin:0;
                    @include font(var(--tc), 1.9rem, 500);

                }
            }
            .foot{
                footer{

                    a{
                        border-bottom-right-radius: 4rem;
                        border-radius: 4rem;
                        padding: 10px;
                        text-decoration: none;
                        background:#333;
                        @include font(var(--tc), 1rem, 600);
                        opacity: 70%;
                        &:hover{
                            opacity: 100%;
                            background: var(--trc);

                        }
                    }
                }
            }
            .content{
                
                .ctnt{
                    padding: 10px;
                    .ctnt-msg{
                        .cm{
                            @include font(var(--tc), 1.1rem, 650);
                            line-height: 1.5rem;
                            a{
                                text-decoration: none;
                                color:hsl(0, 100%, 35%);
                            }
                        }
                    }

                    .ctnt-box{
                        .cb{                            
                            @include font(var(--tc), 1rem, 750);

                            h1{
                                font-weight:900;
                                font-size: 3.5rem;
                                z-index:1;
                                position:relative;
                                
                            }
                            h1::after{
                                content: "";
                                width: 200px;
                                height: 200px;
                                left: 0;
                                top: 0;
                                background: rgba(255, 0, 0, 0.207);
                                border-radius: 6rem;
                                position: absolute;
                            }
                            h1::before{
                                content: "Ooops!";
                                position:absolute;
                                top:35%;
                                font-size: 5rem;
                                padding: 5px 10px;
                                color: rgba(255, 0, 0, 0.268);
                                border-radius: 5rem;
                               

                            }
                        }
                    }

                }

            }
            

        }
    }
    @media screen and (max-width: 350px) {
        h1::before{
            font-size: 3.5rem !important;
        
        }
    }


    </style>