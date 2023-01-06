using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Web_Dev_Assignment_1.Models
{
    public class DiscussionForum
    {
        public int Id { get; set; }

        [Display(Name = "Post Date")]
        public DateTime PostDate { get; set; }

        [Display(Name = "User Name")] 
        public string UserName { get; set; }

        [Required]
        [Display(Name = "Heading")]
        public string Heading { get; set; }

        [Required]
        [Display(Name = "Rating")]
        public int Rating { get; set; }

        [Required]
        [Display(Name = "Topic Title")]
        public string TopicTitle { get; set; }

        [Required] 
        [Display(Name = "Message Content")] 
        public string MessageContent { get; set; }

        public int Like { get; set; }
        public int Dislike { get; set; }

        public bool canIncreaseLike { get; set; }
        public bool canIncreaseDislike { get; set; }
    }
}
