<script>
    export let data;

    let feed = "";
    $: error = "";
    $: disabled = false;
    async function sendfeed(){
        if (feed === "") {
            error = "feedback cannot be empty"
            setTimeout(() => {
                error="";                
            }, 3000);
        }
        if(feed !== "") {
            console.log("sent")
            /*
            try{
                const feedback = {
                    feedback: feed
                }

                await fetch("/api/feedpost", {
                    method: "POST",
                    body: JSON.stringify(feedback)
                })
                console.log(feedback)
                feed = "FEEDBACK SENT";
                disabled = true;
            }catch(error) {
                alert(error)
            }
            */
        }
    }

    $: acc = 6;
    $: ind = 0;

    
</script>

<section class="footer">
    <div class="ft">
        <header>
            <ul>
                <li>                    
                    <h1>STAY CONNECTED</h1>
                </li>

                <li><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="16" height="16" fill="none"/><path d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z" transform="translate(-76)" fill="#fff5ee" fill-rule="evenodd"/></g></svg>
                </a></li>

                <li><a rel="noreferrer" href="https://instagram.com/zidanation265?utm_medium=copy_link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978" fill="#fff5ee" fill-rule="evenodd"/></g></svg>
                </a></li>
                <li><a rel="noreferrer" href="https://twitter.com/ZidaNation265?s=09" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="16" height="16" fill="none"/><path d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6" transform="translate(-38)" fill="#fff5ee" fill-rule="evenodd"/></g></svg>
                </a></li>
                <li><a href="tel:+265997960844">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M9.286,11.429,11,9.857a.525.525,0,0,1,.429-.143l.286.143,4,1.857c.286.143.286.286.286.571a3.622,3.622,0,0,1-1.143,2.571,4.092,4.092,0,0,1-3,1.143,8.7,8.7,0,0,1-4-1,18.727,18.727,0,0,1-4-2.857A24.333,24.333,0,0,1,1.714,9,19.747,19.747,0,0,1,.286,5.857,8.791,8.791,0,0,1,0,3.143,3.754,3.754,0,0,1,1,1,4.344,4.344,0,0,1,3.714,0a.742.742,0,0,1,.571.286l2.143,4a.5.5,0,0,0,.143.286A.525.525,0,0,1,6.429,5L4.571,6.714a.638.638,0,0,0,0,.714A13.642,13.642,0,0,0,6.286,9.714a14.424,14.424,0,0,0,2.286,1.857C8.857,11.714,9.143,11.714,9.286,11.429Z" fill="#fff5ee"/></svg>
                </a></li>
            </ul>
            <ul>
                <li>
                    <h1>ZIDA NATION</h1>
                </li>
                <li><a href="/about#thenation">Nation</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about#licence">Licence</a></li>
                <li><a href="/about#privacy">Privacy Policy</a></li>
            </ul>
            {#if !!data}
            <ul>
                <li>
                    <h1>POPULAR TRACKS</h1>
                </li>
                {#each data.splice(ind, acc) as song}
                <li><a href="/songs/{song.id}">{song.title}</a></li>
                {/each}
                
            </ul>
            {/if}
            <ul>
                <li>
                    <h1>FEEDBACK</h1>
                </li>
                <li>
                    <h1 style="color: var(--trc)">{error}</h1>
                </li>
                <li class:disabled={disabled} class="input">
                    <input type="email" bind:value={feed} placeholder="message">
                    <button disabled={disabled} on:click={sendfeed}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="16" height="16" fill="none"/><path d="M5.6,16a5.045,5.045,0,0,1-3.733-1.6A5.151,5.151,0,0,1,0,10.4a5.35,5.35,0,0,1,.4-2,4.611,4.611,0,0,1,.933-1.6L4,4.133A3.213,3.213,0,0,1,6.4,3.2,3.643,3.643,0,0,1,8.933,4.267,3.424,3.424,0,0,1,10,6.933a3.213,3.213,0,0,1-.933,2.4L7.6,10.667a1.018,1.018,0,0,1-.667.267,1.43,1.43,0,0,1-.8-.267,1.9,1.9,0,0,1-.267-.8,1.9,1.9,0,0,1,.267-.8L7.6,7.6A.806.806,0,0,0,8,6.8a1.629,1.629,0,0,0-.533-1.2,1.554,1.554,0,0,0-.933-.267A1.927,1.927,0,0,0,5.6,5.6L2.8,8.267A3.689,3.689,0,0,0,2.133,10.4,3.9,3.9,0,0,0,3.2,12.933a2.767,2.767,0,0,0,1.333.8,2.3,2.3,0,0,0,1.333.133c.4-.133.8-.133,1.067-.267a2.789,2.789,0,0,0,.8-.533l5.333-5.333A2.924,2.924,0,0,0,14,5.467a3.493,3.493,0,0,0-1.2-2.533,5.937,5.937,0,0,0-1.6-.8H10a2.823,2.823,0,0,0-.933.4,1.691,1.691,0,0,1-.8.133A.886.886,0,0,1,7.6,2.133c-.133-.133-.133-.4-.133-.8A2.341,2.341,0,0,1,8,.667,5.251,5.251,0,0,1,10.667,0a4.936,4.936,0,0,1,3.467,1.333,5.626,5.626,0,0,1,1.867,4A5.218,5.218,0,0,1,14.533,9.2L9.2,14.533A4.924,4.924,0,0,1,5.6,16Z" fill="#fff"/></g></svg>
                    </button>
                </li>
            </ul>
        </header>

        <main>
            <div class="copy">
                <h1>copyright ©  zidanation  2021</h1>  
                <hr>
                <ul>
                    <li><a href="/">BUTAO UX/UI DESIGNS</a></li>
                    <li class="arth">
                        <span>
                            <p>created with</p>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.25 122.88"><title>svelte</title><path class="a" d="M95.73,16.26C84.32-.07,61.78-4.91,45.49,5.47L16.87,23.71A32.83,32.83,0,0,0,2,45.69a35.13,35.13,0,0,0-.55,6.14,34.69,34.69,0,0,0,4,16.06A33,33,0,0,0,.54,80.16a35,35,0,0,0,6,26.46c11.41,16.33,34,21.17,50.24,10.79L85.37,99.17a32.76,32.76,0,0,0,14.83-22,34.08,34.08,0,0,0,.55-6.13A34.72,34.72,0,0,0,96.8,55a33,33,0,0,0,4.91-12.26,36,36,0,0,0,.54-6.13,34.93,34.93,0,0,0-6.52-20.33Zm0,0Z"/><path class="b" d="M42.69,108.16a22.94,22.94,0,0,1-5.72.73A22.7,22.7,0,0,1,18.3,99.11a21,21,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,20.52,20.52,0,0,1,.69-2.67l.54-1.64L17.39,80a37.13,37.13,0,0,0,11.2,5.6l1.06.32-.1,1.06c0,.18,0,.37,0,.55a6.36,6.36,0,0,0,1.18,3.7,6.82,6.82,0,0,0,5.62,3,6.65,6.65,0,0,0,1.72-.22,6.28,6.28,0,0,0,1.76-.77L68.42,74.91a6,6,0,0,0,2.79-5.09A6.35,6.35,0,0,0,70,66.13a6.85,6.85,0,0,0-5.63-2.94,6.65,6.65,0,0,0-1.72.22,6,6,0,0,0-1.75.77L50,71.14a21.06,21.06,0,0,1-5.81,2.55,23.06,23.06,0,0,1-5.72.73A22.73,22.73,0,0,1,19.8,64.65a21.05,21.05,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,19.82,19.82,0,0,1,8.92-13.23L53.74,17.28a21,21,0,0,1,5.81-2.56A23,23,0,0,1,65.27,14,22.74,22.74,0,0,1,84,23.76,21.05,21.05,0,0,1,87.87,36a21.72,21.72,0,0,1-.32,3.69,20.52,20.52,0,0,1-.69,2.67L86.32,44l-1.46-1.07a36.9,36.9,0,0,0-11.2-5.6L72.6,37l.1-1.06c0-.18,0-.37,0-.55a6.42,6.42,0,0,0-1.18-3.71,6.85,6.85,0,0,0-5.62-2.94A6.65,6.65,0,0,0,64.2,29a5.89,5.89,0,0,0-1.76.77L33.82,48a6,6,0,0,0-2.69,4A6.92,6.92,0,0,0,31,53.06a6.35,6.35,0,0,0,1.18,3.69,6.84,6.84,0,0,0,5.62,2.94,6.65,6.65,0,0,0,1.72-.22,6,6,0,0,0,1.76-.77l10.92-7a20.93,20.93,0,0,1,5.81-2.55,23,23,0,0,1,5.72-.73,22.74,22.74,0,0,1,18.68,9.77,21.05,21.05,0,0,1,3.92,12.23A20.64,20.64,0,0,1,86,74.14a19.78,19.78,0,0,1-8.92,13.23L48.51,105.6a21,21,0,0,1-5.82,2.56Zm0,0Z"/></svg>
                           
                        </span>
                        <span>by</span>
                        <span>
                            <a itemprop="author" name="peter butao" href="https://github.com/Peterbutao/">BUTAO</a>
                        </span>
                    </li>
                </ul>

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
    .disabled{
        filter: grayscale(80%);
    }
    ul{
        list-style: none;
        padding: 5px 0;
        li{
            padding: 10px 0px;
            a{
                text-decoration: none;
            }
        }
    }
    .footer{
        padding: 20px 0px;
        background: var(--bc);
        .ft{
            margin: auto;
            max-width: var(--bw);
            padding: 30px 10px;
            header{
                display: flex;
                justify-content: space-between;
                ul{
                    .input{
                        background: var(--trc);
                        border-radius: 4rem;
                        padding: 2px 10px;
                        padding-right: 2px;
                        display: flex;
                        input{
                            border:none;
                            border-bottom: white solid 0.9px;
                            background: none;
                            color: var(--tc);
                        }
                        input:focus{
                            outline:none;
                        }
                        button{
                            width: 100%;
                            margin-right: auto;
                            border: none;
                            background: var(--trc);
                            border-radius: 4rem;
                            padding: 6px 10px;
                        }
                        
                    }
                    li{
                        h1{
                            @include font(var(--tc),1rem, 500);
                            border-left: rgba(128, 128, 128, 0.481) solid 1px;
                            padding-left: 5px;
                        }
                        a{
                            @include font(var(--tc), 0.94rem, 400);
                            padding-left: 10px;
                            svg{
                                width: 25px;
                                background: var(--trc);
                                padding: 10px 5px;
                                border-radius: 4rem;
                            }
                            
                        }
                    }
                }

            }


        }
    }
    main{
        text-align: center;
        
        margin-top: 25vh;
        .copy{
            h1{
                @include font(var(--tc), 1rem, 100);
                letter-spacing: 2.8px;
            }
            ul{
                .arth{
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    span{
                        margin: 0 3px;
                        a{
                            @include font(#ff3e00, 0.59rem, 100);
                        }
                    }
                }
                li{

                    a{
                        @include font(var(--tc), 1rem, 100);
                    }
                    span{
                        @include font(var(--tc), 0.59rem, 100);
                        
                        svg{
                            width: 15px;
                            .a{
                                fill:#ff3e00;
                                }

                            .b{
                                fill:#fff;
                                }

                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 850px) {
        .ft{
            header{
                flex-direction: column;
            }
        }
    }
</style>