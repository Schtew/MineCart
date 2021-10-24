package com.dyno;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.bukkit.Bukkit;
import org.bukkit.Color;
import org.bukkit.boss.BarColor;
import org.bukkit.boss.BarFlag;
import org.bukkit.boss.BarStyle;
import org.bukkit.boss.BossBar;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

import net.md_5.bungee.api.ChatColor;
import net.md_5.bungee.api.chat.ClickEvent;
import net.md_5.bungee.api.chat.TextComponent;

public class QuestManager implements Listener {

    private static Map<UUID, BossBar> map = new HashMap<>();

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent ev) throws SQLException {
        questUpdate(ev.getPlayer().getUniqueId());
    }

    public static void questUpdate(UUID id) throws SQLException {
        Connection conn = DB.getConn();
        Statement s = conn.createStatement();
        String req = "SELECT curr_quest, curr_prog FROM users WHERE uuid='" + id + "'";
        ResultSet r = s.executeQuery(req);
        r.next();
        int quest_no = r.getInt(1);
        int quest_prog = r.getInt(2);
        
        String req2 = "SELECT max_prog FROM quests WHERE quest_no=" + quest_no;
        r = s.executeQuery(req2);
        r.next();
        BossBar bar; 
        if (quest_no == 0) {
            DB.closeConn();
            return;
        }
        if (!map.containsKey(id)) {
            if (quest_no == 1) {
                bar = Bukkit.getServer().createBossBar("Zombies Killed", BarColor.RED, BarStyle.SEGMENTED_10);
                bar.addPlayer(Bukkit.getPlayer(id));
                bar.isVisible();
                map.put(id, bar);
            } else if (quest_no == 2) {
                bar = Bukkit.getServer().createBossBar("Carrots Harvested", BarColor.GREEN, BarStyle.SOLID);
                bar.addPlayer(Bukkit.getPlayer(id));
                bar.isVisible();
                map.put(id, bar);
            } else if (quest_no == 3) {
                bar = Bukkit.getServer().createBossBar("Skeletons Shot", BarColor.WHITE, BarStyle.SEGMENTED_10);
                bar.addPlayer(Bukkit.getPlayer(id));
                bar.isVisible();
                map.put(id, bar);
            }
        }
        //This shouldn't run when there is no curr quest.
        if ((double) quest_prog/ r.getDouble(1) >= 1) {
            TextComponent message = new TextComponent(ChatColor.GOLD + "Congratulations!" 
            + ChatColor.GRAY + " You completed your " + ChatColor.GOLD + "Quest!");
            message.setClickEvent( new ClickEvent( ClickEvent.Action.OPEN_URL, "https://localhost:3000" ) );
            Bukkit.getPlayer(id).spigot().sendMessage(message);
            return;
        }
        map.get(id).setProgress((double) quest_prog/ r.getDouble(1));
        map.get(id).isVisible();
        DB.closeConn();
    }
   
    public static Map<UUID, BossBar> getMap() {
        return map;
    }

}
