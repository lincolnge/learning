<div class="">
  <div class="">
    <!-- 这个文件的后缀如果是 tpl，将可能不能正常解析基本的 js，比如 forEach、for、if 等。 -->
    测试
    <br />
    <% var a = 1
    var b = 2
    var c = a+b %>
    show: <%= c %>

    <% if (true) { %>
      <h2><%= 1 %></h2>
    <% } %>

    <% [1, 2, 3].forEach(function(item) { %>
      <%= item %>
    <% }); %>

    <br />
    <% for (var i = 0; i < 3; i++) { %>
      <%= i %>
    <% } %>

    <br />

    <br />
  </div>
</div>
