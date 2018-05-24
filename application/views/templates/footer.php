<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
                <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>



<style>
    div.e {
        height: 60px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        color: #000000;
        margin: -8px;
        width:75%;
        position:fixed;
        bottom:0px;
    }
</style>
<script>
</script>
       <div class="e">
           <nav class="navbar navbar-default">
               <div class="container-fluid">
                   <div class="navbar-header">
                       <a class="navbar-brand" href="">Ела с нас</a>
                   </div>
                   <ul class="nav navbar-nav">
                       <li class="active"><a href="">Карта</a></li>
                       <li class="dropup">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Събития
                               <span class="caret"></span></a>
                           <ul class="dropdown-menu">
                               <li><a href="#" data-toggle="modal" data-target="#myModal">Търсене / Намери събитие</a></li>
                               <li><a href="#">Близки събития / дата и място</a></li>
                           </ul>
                       </li>
                       <li class="dropup">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Мой събития
                               <span class="caret"></span></a>
                           <ul class="dropdown-menu">
                               <li><a href="#" data-toggle="modal" data-target="#myModal">Добавяне</a></li>
                               <li><a href="#">Редактиране</a></li>
                           </ul>
                       </li>
                       <li class="dropup">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Мой приятели
                               <span class="caret"></span></a>
                           <ul class="dropdown-menu">
                               <li><a href="#" data-toggle="modal" data-target="#myModal">Добавяне</a></li>
                               <li><a href="#">Редактиране</a></li>
                           </ul>
                       </li>
                       <li class="dropup">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Относно сайта
                               <span class="caret"></span></a>
                           <ul class="dropdown-menu">
                               <li><a href="#" data-toggle="modal" data-target="#myModal">За Контакти</a></li>
                               <li><a href="#">Каква е нашата цел?</a></li>
                               <li><a href="#">Как работи сайта?</a></li>
                           </ul>
                       </li>
                       <li class="dropup">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Потребителски панел
                               <span class="caret"></span></a>
                           <ul class="dropdown-menu">
                               <li><a href="#">Изход</a></li>
                               <li><a href="#">Потребителски данни</a></li>
                           </ul>
                       </li>
                       <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                       <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>

                   </ul>
               </div>
           </nav>
       </div>
</body>
</html>