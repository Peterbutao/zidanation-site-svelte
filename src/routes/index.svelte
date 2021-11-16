<script context="module">
	export const prerender = true;
	export async function load({fetch}) {
            const res = await fetch("/api");
            const songdb = await res.json();
            return{
                props: {
                    songdb
                }
            }
    
    }

</script>

<script>

	export let songdb;
	console.log(songdb)

    import SectionOne from "$lib/components/SectionOne.svelte";
    import SectionTwo from "$lib/components/SectionTwo.svelte";
    import SectionThree from "$lib/components/SectionThree.svelte";
    import SectionFour from "$lib/components/SectionFour.svelte";
    import SectionFive from "$lib/components/SectionFive.svelte";
    import Footer from "$lib/components/Footer.svelte";
    
    
</script>

<svelte:head>
	<title>zida nation | HOME</title>
</svelte:head>


<article itemscope itemtype="http://schema.org/Article" >
    <meta itemprop="publisher" content="zida nation">
    <meta itemprop="image" content="/src/favicon.png"> 
    <SectionOne />   
    <SectionTwo data={songdb.songs}/>
    
    <SectionThree data={songdb.albums}/>    
    <SectionFour data={songdb.songs}/>
    <SectionFive />    

    <footer>
        <Footer data={songdb.songs}/>
    </footer> 

</article>
slu