<template>
    <div class="lo-general">
        <div class="login-container">
            <h2>Log in</h2>
            <div class="form-elements">
                <form>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <br>
                    <button type="submit">Log in</button>
                    <button type="button" onclick="location.href='registro.html'">Sign up</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-elements form{
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: bold;
}

form input{
    padding: 10px;
    border: 1px solid #1f1f1f;
    border-radius: 5px;
    width: 100%;
    height: 35px;
}
.lo-general{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 150px);
}
.login-container{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    margin: auto;
}

button {
    background-color: #1f1f1f;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
