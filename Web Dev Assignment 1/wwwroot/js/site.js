// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#text', '#text2', '#text3', '#text4').hide();

    $("#tech1").hover(
        function () {
            $('#text').show();
            $('#text').removeClass(hidden);
        }, function () {
            $('#text').hide();
        }
    );
    $("#tech2").hover(
        function () {
            $('#text2').show();
            $('#text2').removeClass(hidden);
        }, function () {
            $('#text2').hide();
        }
    );
    $("#tech3").hover(
        function () {
            $('#text3').show();
            $('#text3').removeClass(hidden);
        }, function () {
            $('#text3').hide();
        }
    );
    $("#tech4").hover(
        function () {
            $('#text4').show();
            $('#text4').removeClass(hidden);
        }, function () {
            $('#text4').hide();
        }
    );
    $("#tech5").hover(
        function () {
            $('#text5').show();
            $('#text5').removeClass(hidden);
        }, function () {
            $('#text5').hide();
        }
    );
    $("#tech6").hover(
        function () {
            $('#text6').show();
            $('#text6').removeClass(hidden);
        }, function () {
            $('#text6').hide();
        }
    );
    $("#company1").hover(
        function () {
            $('#textcompany1').show();
            $('#textcompany1').removeClass(hidden);
        }, function () {
            $('#textcompany1').hide();
        }
    );
    $("#company2").hover(
        function () {
            $('#textcompany2').show();
            $('#textcompany2').removeClass(hidden);
        }, function () {
            $('#textcompany2').hide();
        }
    );
    $("#company3").hover(
        function () {
            $('#textcompany3').show();
            $('#textcompany3').removeClass(hidden);
        }, function () {
            $('#textcompany3').hide();
        }
    );
    $("#company4").hover(
        function () {
            $('#textcompany4').show();
            $('#textcompany4').removeClass(hidden);
        }, function () {
            $('#textcompany4').hide();
        }
    );
    $("#company5").hover(
        function () {
            $('#textcompany5').show();
            $('#textcompany5').removeClass(hidden);
        }, function () {
            $('#textcompany5').hide();
        }
    );
    $("#company6").hover(
        function () {
            $('#textcompany6').show();
            $('#textcompany6').removeClass(hidden);
        }, function () {
            $('#textcompany6').hide();
        }
    );

    $(function () {
        $("#elasticGrid").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 364,
            'items':
                [
                    /*AI Elastic Grid*/
                    {
                        'title': 'IBM Watson <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>IBM Watson</h4>',
                        'thumbnail': ['/images/ElasticGrid/ibm.png'],
                        'large': ['/images/ElasticGrid/ibm.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/watson', 'new_window': true },
                            ],
                        'tags': ['AI']
                    },

                    {
                        'title': 'Microsoft AI <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Microsoft AI</h4>',
                        'thumbnail': ['/images/ElasticGrid/microsoft.png'],
                        'large': ['/images/ElasticGrid/microsoft.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.microsoft.com/en-us/ai?activetab=pivot1%3aprimaryr6', 'new_window': true },
                            ],
                        'tags': ['AI']
                    },

                    {
                        'title': 'CSIRO AI <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>CSIRO AI</h4>',
                        'thumbnail': ['/images/ElasticGrid/csiro.jpg'],
                        'large': ['/images/ElasticGrid/csiro.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://data61.csiro.au/en/Our-Work/AI-and-Machine-Learning', 'new_window': true },
                            ],
                        'tags': ['AI']
                    },

                    {
                        'title': 'Amazon AI <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Amazon AI </h4>',
                        'thumbnail': ['/images/ElasticGrid/amazon.jpg'],
                        'large': ['/images/ElasticGrid/amazon.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/machine-learning/ai-services/', 'new_window': true },
                            ],
                        'tags': ['AI']
                    },

                    /*IoT Elastic Grid*/
                    {
                        'title': 'IBM IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>IBM IoT</h4>',
                        'thumbnail': ['/images/ElasticGrid/ibm.png'],
                        'large': ['/images/ElasticGrid/ibm.png.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/blogs/internet-of-things/industry-4-0/', 'new_window': true },
                            ],
                        'tags': ['IoT']
                    },
                    {
                        'title': 'Microsoft IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Microsoft IoT</h4>',
                        'thumbnail': ['/images/ElasticGrid/microsoft.png'],
                        'large': ['/images/ElasticGrid/microsoft.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://azure.microsoft.com/en-au/overview/iot/?site=mscom_iot', 'new_window': true },
                            ],
                        'tags': ['IoT']
                    },
                    {
                        'title': 'Amazon IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Amazon IoT </h4>',
                        'thumbnail': ['/images/ElasticGrid/amazon.jpg'],
                        'large': ['/images/ElasticGrid/amazon.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/iot/?sc_channel=PS&sc_campaign=acquisition_AU&sc_publisher=google&sc_medium=iot_nb&sc_content=iot_e&sc_detail=iot&sc_category=iot&sc_segment=154387165862&sc_matchtype=e&sc_country=AU&s_kwcid=AL!4422!3!154387165862!e!!g!!iot&ef_id=WmksLwAAAHVHXlHa:20180805102347:s', 'new_window': true },
                            ],
                        'tags': ['Iot']
                    },
                    {
                        'title': 'CIO IoT <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>CIO IoT</h4>',
                        'thumbnail': ['/images/ElasticGrid/cio.jpg'],
                        'large': ['/images/ElasticGrid/cio.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.cio.com/article/3496289/federal-government-launches-ai-and-iot-projects.html', 'new_window': true },
                            ],
                        'tags': ['Iot']
                    },

                    /*Cognitive Computing Elastic Grid*/
                    {
                        'title': 'IBM Cognitive Computing <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>IBM Cognitive Computing</h4>',
                        'thumbnail': ['/images/ElasticGrid/ibm.png'],
                        'large': ['/images/ElasticGrid/ibm.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/services/artificial-intelligence', 'new_window': true },
                            ],
                        'tags': ['Cognitive Computing']
                    },
                    {
                        'title': 'Microsoft Cognitive Computing <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Microsoft Cognitive Computing</h4>',
                        'thumbnail': ['/images/ElasticGrid/microsoft.png'],
                        'large': ['/images/ElasticGrid/microsoft.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://azure.microsoft.com/en-au/services/cognitive-services/', 'new_window': true },
                            ],
                        'tags': ['Cognitive Computing']
                    },
                    {
                        'title': 'Google Cognitive Computing <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Google Cognitive Computing</h4>',
                        'thumbnail': ['/images/ElasticGrid/google.jpg'],
                        'large': ['/images/ElasticGrid/google.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://cloud.google.com/vision/', 'new_window': true },
                            ],
                        'tags': ['Cognitive Computing']
                    },
                    {
                        'title': 'Forbes Cognitive Computing <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Forbes Cognitive Computing</h4>',
                        'thumbnail': ['/images/ElasticGrid/forbes.jpg'],
                        'large': ['/images/ElasticGrid/forbes.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/bernardmarr/2016/03/23/what-everyone-should-know-about-cognitive-computing/?sh=542edcea5088', 'new_window': true },
                            ],
                        'tags': ['Cognitive Computing']
                    },


                    /*Cloud Computing*/
                    
                    {
                        'title': 'Google Cloud <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Google Cloud</h4>',
                        'thumbnail': ['/images/ElasticGrid/google.jpg'],
                        'large': ['/images/ElasticGrid/google.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://cloud.google.com/solutions/iot/', 'new_window': true },
                            ],
                        'tags': ['Cloud Computing']
                    },
                    {
                        'title': 'Microsoft Cloud <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Microsoft Cloud</h4>',
                        'thumbnail': ['/images/ElasticGrid/microsoft.png'],
                        'large': ['/images/ElasticGrid/microsoft.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://azure.microsoft.com/en-au/', 'new_window': true },
                            ],
                        'tags': ['Cloud Computing']
                    },
                    {
                        'title': 'IBM Cloud <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>IBM Cloud</h4>',
                        'thumbnail': ['/images/ElasticGrid/ibm.png'],
                        'large': ['/images/ElasticGrid/ibm.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/cloud', 'new_window': true },
                            ],
                        'tags': ['Cloud Computing']
                    },
                    {
                        'title': 'Amazon Cloud <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Amazon Cloud</h4>',
                        'thumbnail': ['/images/ElasticGrid/amazon.jpg'],
                        'large': ['/images/ElasticGrid/amazon.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/', 'new_window': true },
                            ],
                        'tags': ['Cloud Computing']
                    },


                    /*Robotics*/
                    {
                        'title': 'Forbes Robotics <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Forbes Robotics</h4>',
                        'thumbnail': ['/images/ElasticGrid/forbes.jpg'],
                        'large': ['/images/ElasticGrid/forbes.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/jimlawton/2018/03/20/the-role-of-robots-in-industry-4-0/?sh=a036197706b6', 'new_window': true },
                            ],
                        'tags': ['Robotics']
                    },
                    {
                        'title': 'ZDN Robotics <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>ZDN Robotics</h4>',
                        'thumbnail': ['/images/ElasticGrid/zdn.jpg'],
                        'large': ['/images/ElasticGrid/zdn.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.zdnet.com/article/robotics-and-industry-4-0/', 'new_window': true },
                            ],
                        'tags': ['Robotics']
                    },
                    {
                        'title': 'I-Scoop Robotics <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>I-Scoop Robotics</h4>',
                        'thumbnail': ['/images/ElasticGrid/iscoop.jpg'],
                        'large': ['/images/ElasticGrid/iscoop.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.i-scoop.eu/robots-cobots-logistics-4-0/', 'new_window': true },
                            ],
                        'tags': ['Robotics']
                    },
                    {
                        'title': 'Automation World Robotics <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Automation World Robotics</h4>',
                        'thumbnail': ['/images/ElasticGrid/automation.png'],
                        'large': ['/images/ElasticGrid/automation.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.automationworld.com/products/networks/blog/13318624/industry-40-is-hereare-you-ready', 'new_window': true },
                            ],
                        'tags': ['Robotics']
                    },

                    /*Blockchains*/
                    {
                        'title': 'Blockchain <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Blockchain</h4>',
                        'thumbnail': ['/images/ElasticGrid/blockchain.jpg'],
                        'large': ['/images/ElasticGrid/blockchain.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.blockchain.com/', 'new_window': true },
                            ],
                        'tags': ['Blockchains']
                    },
                    {
                        'title': 'Forbes Blockchain <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>Forbes Blockchain</h4>',
                        'thumbnail': ['/images/ElasticGrid/forbes.jpg'],
                        'large': ['/images/ElasticGrid/forbes.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/andrewrossow/2018/04/11/bringing-blockchain-into-industry-4-0/?sh=45a486746dc7', 'new_window': true },
                            ],
                        'tags': ['Blockchains']
                    },
                    {
                        'title': 'PC Magazine Blockchain <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4PC Magazine Blockchain</h4>',
                        'thumbnail': ['/images/ElasticGrid/pcmag.png'],
                        'large': ['/images/ElasticGrid/pcmag.png'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://au.pcmag.com/enterprise/46389/blockchain-the-invisible-technology-thats-changing-the-world', 'new_window': true },
                            ],
                        'tags': ['Blockchains']
                    },
                    {
                        'title': 'CSIRO Blockchain <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>CSIRO Blockchain</h4>',
                        'thumbnail': ['/images/ElasticGrid/csiro.jpg'],
                        'large': ['/images/ElasticGrid/csiro.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.data61.csiro.au/en/our-work/safety-and-security/secure-systems-and-platforms/blockchain', 'new_window': true },
                            ],
                        'tags': ['Blockchains']
                    },
                ]
        });
    });
});

