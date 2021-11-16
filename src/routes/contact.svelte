
<script>

    let subject = "";
    let email = "";
    let message = "";
    $: user = "";
    $: error = "";
    $: disabled = false;
    async function sendmsg (){
        if (message === "" || email === "" || user === "") {
            error = "fill in all text fields"
            setTimeout(() => {
                error="";                
            }, 3000);
        }
        if(message !== "") {
            try{
                const msg = {
                    name: user,
                    email: email,
                    subject: subject,
                    message: message

                };

                await fetch("/api/messagepost", {
                    method: "POST",
                    body: JSON.stringify(msg)
                })
                console.log(msg)
                error = "MESSAGE SENT";
                setTimeout(()=>{
                    message="",
                    email="",
                    subject=""
                },2000)
                disabled = true;
            }catch(error) {
                alert(error)
            }
        }
    }

</script>
<article>
    <main>
        <div class="login">
            <form class="myForm">

                <div class="formTitles">
                    <div class="user-img">
                        <img src="/src/lib/assets/img/face.png"/>
                    </div>
                    <h3><span>Welcome </span><span class="user-name">{user}</span></h3>
                    <div class="msg ">{error}</div>
                   
                </div>

                <div class="name">
                    <input type="text" placeholder="name" class="name-input" bind:value={user}>
                </div>

                <div class="mail">
                    <input bind:value={email}  type="text" placeholder="email" class="mail-input">
                </div>

                <div class="mail">
                    <input  bind:value={subject} type="text" placeholder="subject" class="mail-input">
                </div>

              

                <div class="txt-area">                
                    <textarea  bind:value={message} name="message"  cols="30" rows="7" class="message form-control" placeholder="Message"></textarea>
                </div>

                <button disabled={disabled} class:disabled={disabled} type="button" on:click={sendmsg} class="sub-btn">SUBMIT</button>
            </form>



            <footer>
                <div class="foot">
                    <p>&copy BUTAO UX / UI dev / 2021</p>
                </div>
            </footer>
        </div>

    </main>
</article>

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
  
    article{
        background: var(--bc);
        min-height: 100vh;
        display: flex;
        align-items: center;
        main{
            width:100%;
            max-width: var(--bw);        
            margin: auto;   
            height: 100%;

            .login{
                text-align: center;
                margin: auto;
                max-width: 100%;
                @include font(var(--tc), 1rem, 600);
            
                
            }



            .login button{
                border: solid rgb(255, 255, 255) 0.9px;
                
                
            }
            .login button:focus{
                outline: none;
            }
            .formTitles{
                margin-top: 4rem;
                
                
            }
            .formTitles p{
                font-size: 0.9em;
                
            }
            .formTitles h3{
                overflow:hidden;
                font-size:1.5em;
            }
            input{
                @include font(var(--tc), 1rem, 600);                
                background: var(--trc);
                text-align: center;
                border:none;
                width: 100%;
                margin: 10px 0px;
                padding: 10px 0px;
            
            }
            textarea{
                background: var(--trc);
                width: 100%;
                height: 150px;              
                resize: none;   
                border:none;     
                &:focus{
                    outline: none;
                }

            }
            input:focus{
                outline: none;
            }

          


            input::placeholder{
                color: var(--tc);
                opacity: 40%;
            }

            .sub-btn{
                background: none;
                border: none;
                padding-left: 25px;
                padding-right: 25px;
                padding-top: 4px;
                padding-bottom: 4px;
                margin-top:15px; 
                margin-bottom: 25px;  
                font-size:0.9em;
                color: var(--tc);            
                cursor: pointer;
            }
            .sub-btn:hover{
                background: rgba(243, 161, 155, 0.507);
                border:solid rgba(243, 161, 155, 0.507) 0.9px;
                color:white;
            }
            .foot{
                
            
                text-align:left;
                padding: 5px;
                font-size:10px;
            }
            .myForm{
                padding: 0px  30px;
            }

            .list li{
                list-style: none;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                
                text-align: center;
                color: white;
                font-size: 16px;
            }

            

            .error{
                border-left: #42435d 3px solid;
                border-top-right-radius: 2rem;
                border-bottom-right-radius: 2rem;
                padding: 5px;
                width: 100%;
                background-color: #f0f0f5;
                font-size:15px;
                font-weight: 800;
                letter-spacing: 5px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: rgb(182, 69, 69);

            }
        }
    }
</style>