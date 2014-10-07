/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var rssreaderapp = {};

rssreaderapp.app = {

    blogData: [ {title: "A first post", body: "This is the first post."},
                {title: "The second post", body: "The second post is better."} ],

    postTemplate: {},
    blogListTemplate: {},

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        this.postTemplate = Handlebars.compile($("#post-template").html());
        this.blogListTemplate = Handlebars.compile($("#blog-list-template").html());
    },

    homeBeforeCreate: function(event, args) {
        $("#blog-list").html(this.blogListTemplate(this.blogData));
        $("#blog-list").enhanceWithin();
    },

    postBeforeShow: function(event, args) {
        var post = this.blogData[args[1]];
        $("#post-content").html(this.postTemplate(post));
        $("#post-content").enhanceWithin();
    },
    
    onDeviceReady: function() {
        FastClick.attach(document.body);
    }
};

rssreaderapp.router = new $.mobile.Router(
    {
        "#post[?](\\d+)$": {handler: "postBeforeShow", events: "bs"},
        "#home$": {handler: "homeBeforeCreate", events: "bc"}
    },
    rssreaderapp.app
);