/* Slide Panel */
        .cb_slide_panel {
            background: url(../img/panel_bg_default.jpg) repeat;
            border-right: 1px solid #E0E0E0;
            box-shadow: 1px 1px 23px rgba(0, 0, 0, 0.17), -1px -1px 0 rgba(255, 255, 255, 0.85) inset;
            position: fixed;
            z-index: 65000;
            display: none;
        }
        .cb_slide_panel.panel_left, .cb_slide_panel.panel_right {
            width: 278px;
            height: 100%;
        }
        .cb_slide_panel.panel_right {
            box-shadow: 1px 1px 23px rgba(0, 0, 0, 0.17), 1px 1px 0 rgba(255, 255, 255, 0.85) inset;
        }
        .cb_slide_panel.panel_top, .cb_slide_panel.panel_bottom {
            height: 278px;
            width: 100%;
        }
        .cb_slide_panel.panel_top {
            box-shadow: 1px 1px 23px rgba(0, 0, 0, 0.17), -1px -1px 0 rgba(255, 255, 255, 0.85) inset;
        }
        .cb_slide_panel.panel_bottom {
            box-shadow: 1px 1px 23px rgba(0, 0, 0, 0.17), 1px 1px 0 rgba(255, 255, 255, 0.85) inset;
        }
        .cb_slide_panel a.close {
            background: url(../img/panel_close_default.jpg) no-repeat;
            border: 1px solid #E0E0E0;
            height: 40px;
            position: absolute;
            text-indent: -9999em;
            width: 40px;
            display: none;
        }
        .cb_slide_panel.panel_left a.close {
            right: -42px;
            top: 20px;
        }
        .cb_slide_panel.panel_right a.close {
            left: -42px;
            top: 20px;
        }
        .cb_slide_panel.panel_top a.close {
            bottom: -41px;
            left: 20px;
        }
        .cb_slide_panel.panel_bottom a.close {
            top: -41px;
            left: 20px;
        }
        .cb_slide_panel a.close:hover {
            background-position: -40px 0;
        }
        
        .cb_slide_panel .inner {
            padding: 20px 0 0 20px;
            width: 248px;
        }
        .cb_slide_panel.loading .inner {
            min-height: 300px;
            background: url(../img/ajax-loader.gif) no-repeat scroll 50% 50% transparent
        }
        .cb_slide_panel h1 {
            color: #FFFFFF;
            font-size: 1.2em;
            margin: -0.15em 0 20px;
            text-shadow: 0 1px 0 #000000;
        }
        .cb_slide_panel h2 {
            border-bottom: 1px solid #276BB3;
            color: #FFFFFF;
            font-size: 14px;
            margin: 0;
            padding: 1px 0 0;
            text-decoration: none;
            text-shadow: 0 1px 0 #1F5287;
        }
        .cb_slide_panel ul {
            padding: 0 0 0 10px;
            list-style-type: none;
        }
        .cb_slide_panel ul li {
        }
        .cb_slide_panel ul li a {
            color: #91aac4;
            text-decoration: none;
        }
        .cb_slide_panel ul li a:hover {
            color: #fff;
        }
