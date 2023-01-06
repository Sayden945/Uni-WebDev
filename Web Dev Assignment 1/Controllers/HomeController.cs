using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Web_Dev_Assignment_1.Models;
using Web_Dev_Assignment_1.Data;
using Microsoft.EntityFrameworkCore;

namespace Web_Dev_Assignment_1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Companies() 
        {
            /* return View(await _context.DiscussionForum.ToListAsync()); */
            if (!User.Identity.IsAuthenticated)
            {
                foreach (var post in _context.DiscussionForum)
                {
                    post.canIncreaseLike = true;
                    post.canIncreaseDislike = true;
                }
                await _context.SaveChangesAsync();
            }

            var allDiscussions = from result in _context.DiscussionForum 
                                 orderby result.PostDate descending 
                                 select result;
            return View(await allDiscussions.ToListAsync());
        }

        public IActionResult Technologies()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
