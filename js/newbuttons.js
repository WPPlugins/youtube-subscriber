(function () {
    tinymce.PluginManager.add('youtube_subscriber', function (editor, url) {
        console.log(url);
        editor.addButton('youtube_subscriber', {
            title: 'Youtube Subscriber',
            image: url + '/../image/official-youtube-logo-tile_25x25.png',
            onclick: function () {
                var channelname = prompt('Enter your channel name');
                if (channelname != "" && channelname != null) {
                    editor.insertContent('[youtube-subscriber channelname=' + channelname + ']');
                }
            }
        });
    });
})();


