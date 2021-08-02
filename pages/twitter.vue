<template>
    <div>
        <Header />
        <div class="post-form">
            <h1>投稿</h1>
            <section>
                <h2>フォーム</h2>
                <form action="/" method="post" enctype="multipart/form-data">
                    <textarea class="text-form" name="post_text" type="text" placeholder="投稿テキスト">テスト</textarea>
                    <input id="post_img1" class="file-form" name="post_img1" type="file" />
                    <input id="post_img2" class="file-form" name="post_img2" type="file" />
                    <input id="post_img3" class="file-form" name="post_img3" type="file" />
                    <input id="post_img4" class="file-form" name="post_img4" type="file" />
                    <button type="submit">送信</button>
                </form>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>