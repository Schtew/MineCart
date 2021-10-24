package com.dyno;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.bukkit.Bukkit;
import org.bukkit.entity.Damageable;
import org.bukkit.entity.Entity;
import org.bukkit.entity.Pig;
import org.bukkit.entity.Player;
import org.bukkit.entity.Zombie;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageByEntityEvent;

public class EventOne implements Listener {
    private MoneyPlugin plugin;
   
    @EventHandler
    public void killZombie(EntityDamageByEntityEvent ev) throws SQLException {
        Entity damager = ev.getDamager();
        Entity damagee = ev.getEntity();


        if (damager instanceof Player 
        && QuestManager.getMap().get(((Player) damager).getUniqueId()).getTitle().equals("Zombies Killed")
        && damagee instanceof Zombie) {
            Damageable damageeDmg = (Damageable) damagee;
            Player player = (Player)damager;
            if (damageeDmg.getHealth() - ev.getDamage() < 0) {
                Connection conn = DB.getConn();
                Statement s = conn.createStatement();
                String req = "SELECT curr_prog FROM users WHERE uuid='" + player.getUniqueId() + "'";
                ResultSet r = s.executeQuery(req);
                r.next();
                int curr_prog = r.getInt(1);
                if (curr_prog == 10) {
                    QuestManager.questUpdate(player.getUniqueId());
                    return;
                }
                curr_prog++;
                req = "UPDATE users SET curr_prog ='" + curr_prog + "' WHERE uuid='" + player.getUniqueId() + "'";
                s.executeUpdate(req);
                QuestManager.questUpdate(player.getUniqueId());
            }
        }

    }
}
