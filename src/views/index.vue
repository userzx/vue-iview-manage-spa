<template>
    <div id="index-content">
        <img class="logo" src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
        <p>
            Welcome to your iView app!
        </p>
        <p>
            Go through iView
            <a href="https://www.iviewui.com/" target="_blank">documentation</a>.
        </p>
    </div>
</template>

<script>
    export default {

    };
</script>

<style>
    html {
        height: 100%;
    }
    
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    
    #index-content {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }
    
    #index-content a {
        color: #42b983;
        text-decoration: none;
    }
    
    .logo {
        width: 100px;
        height: 100px
    }
</style>