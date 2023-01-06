using Microsoft.EntityFrameworkCore.Migrations;

namespace Web_Dev_Assignment_1.Data.Migrations
{
    public partial class week10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Rating",
                table: "DiscussionForum",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "DiscussionForum");
        }
    }
}
